import { createContext, useContext, useEffect, useState } from "react";
import { 
  Login, 
  OfficerLogin, 
  StudentLogin, 
  Profile, 
  Logout 
} from "../services/AuthServices";
import { 
  setToken, 
  getToken, 
  setUser, 
  getUser, 
  setUserType, 
  getUserType, 
  clearAuthData 
} from "../utils/Cookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [userType, setUserTypeState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = getToken();
      const savedUser = getUser();
      const savedUserType = getUserType();

      if (token && savedUser) {
        // Verify token is still valid by fetching user profile
        const profileRes = await Profile();
        if (profileRes.success) {
          setUserState(profileRes.data);
          setUserTypeState(savedUserType);
          setIsAuthenticated(true);
        } else {
          clearAuthData();
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      clearAuthData();
    } finally {
      setLoading(false);
    }
  };

  // Generic login function
  const login = async (credentials) => {
    try {
      // Determine if it's officer (username) or student (nisn) login
      let loginData;
      if (credentials.username) {
        loginData = await OfficerLogin(credentials.username, credentials.password);
      } else if (credentials.nisn) {
        loginData = await StudentLogin(credentials.nisn, credentials.password);
      } else {
        // Try generic login endpoint
        loginData = await Login(credentials);
      }
      
      if (loginData.success) {
        // Extract token and user data from response
        const token = loginData.data.access_token || loginData.data.token;
        const userData = loginData.data.user || loginData.data;
        
        // Determine user type
        const type = userData.username ? 'officer' : 'student';
        
        // Save auth data
        setToken(token);
        setUser(userData);
        setUserType(type);
        
        setUserState(userData);
        setUserTypeState(type);
        setIsAuthenticated(true);
        
        return { success: true, data: userData, userType: type };
      }
      
      return { success: false, message: loginData.message };
    } catch (error) {
      console.error('Login failed:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login gagal' 
      };
    }
  };

  // Officer specific login
  const officerLogin = async (username, password) => {
    try {
      const data = await OfficerLogin(username, password);
      
      if (data.success) {
        const token = data.data.access_token || data.data.token;
        const userData = data.data.user || data.data;
        
        setToken(token);
        setUser(userData);
        setUserType('officer');
        
        setUserState(userData);
        setUserTypeState('officer');
        setIsAuthenticated(true);
        
        return { success: true, data: userData };
      }
      
      return { success: false, message: data.message };
    } catch (error) {
      console.error('Officer login failed:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login gagal' 
      };
    }
  };

  // Student specific login
  const studentLogin = async (nisn, password) => {
    try {
      const data = await StudentLogin(nisn, password);
      
      if (data.success) {
        const token = data.data.access_token || data.data.token;
        const userData = data.data.user || data.data;
        
        setToken(token);
        setUser(userData);
        setUserType('student');
        
        setUserState(userData);
        setUserTypeState('student');
        setIsAuthenticated(true);
        
        return { success: true, data: userData };
      }
      
      return { success: false, message: data.message };
    } catch (error) {
      console.error('Student login failed:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login gagal' 
      };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await Logout();
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Clear local data regardless of API call success
      clearAuthData();
      setUserState(null);
      setUserTypeState(null);
      setIsAuthenticated(false);
    }
  };

  // Update user data
  const updateUser = (userData) => {
    setUser(userData);
    setUserState(userData);
  };

  const value = {
    user,
    userType,
    loading,
    isAuthenticated,
    login,
    officerLogin,
    studentLogin,
    logout,
    updateUser,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};