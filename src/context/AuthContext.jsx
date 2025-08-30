import { createContext, useContext, useEffect, useState } from "react";
import { Login, Profile } from "../services/AuthServices";
import { setToken } from "../utils/Cookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const data = await Login(username, password);
    setToken(data.access_token);
    console.log(data.access_token);
  };

  useEffect(() => {
    Profile()
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
