import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  if (typeof window === "undefined") {
    return null; // Server-side rendering, return null or handle differently
  }

  const storedToken = localStorage.getItem("token");
  if (!storedToken) {
    return null;
  }

  return {
    token: storedToken,
  };
};

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  console.log("In the AuthContextProvider");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (storedToken && storedToken !== token) {
        setToken(storedToken);
      }
    }
  }, []);

  const logoutHandler = () => {
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  };

  const loginHandler = (token) => {
    setToken(token);
    console.log("token in the login handler", token);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
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
