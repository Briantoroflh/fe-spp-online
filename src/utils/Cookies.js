import Cookies from "js-cookie";

// Token management
export const setToken = (token) => {
    Cookies.set("token", token, { expires: 7 }); // Token expires in 7 days
}

export const getToken = () => {
    return Cookies.get("token");
}

export const removeToken = () => {
    Cookies.remove("token");
}

// User data management
export const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

export const removeUser = () => {
    localStorage.removeItem("user");
}

// User type management
export const setUserType = (type) => {
    Cookies.set("user_type", type, { expires: 7 });
}

export const getUserType = () => {
    return Cookies.get("user_type");
}

export const removeUserType = () => {
    Cookies.remove("user_type");
}

// Clear all auth data
export const clearAuthData = () => {
    removeToken();
    removeUser();
    removeUserType();
}