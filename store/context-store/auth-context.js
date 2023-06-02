import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  remeberMe: false,
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  if (typeof window === "undefined") {
    return null; // Server-side rendering, return null or handle differently
  }

  const storedToken = localStorage.getItem("token");
  
  if (storedToken === "") {
    console.log("To return null")
    return null;
  }

  return {
    token: storedToken,
  };
};

export const AuthContextProvider = ({ children }) => {
  console.log("In the AuthContextProvider");
  const tokenData = retrieveStoredToken();
console.log("The retrived token is", tokenData)
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
 

  useEffect(() => {
    console.log("In the AuthContextProvider Effect");
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (storedToken && storedToken !== token) {
        setToken(storedToken);
      }
    }
  }, [token]);

  const logoutHandler = () => {
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  };

  const loginHandler = (token, remeberMe) => {
    setToken(token);
    console.log("token in the login handler", token);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      localStorage.setItem("remeberMe", remeberMe);
    }
  };

  const contextValue = {
    token: token,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
