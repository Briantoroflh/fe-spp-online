import { createContext, useContext, useState } from "react";
import { Login } from "../services/AuthServices";
import { setToken } from "../utils/Cookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const data = await Login(email, password);
    console.log(data);
    
    setToken(data.access_token);
    setUser(data.data);

  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
