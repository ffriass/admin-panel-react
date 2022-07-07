import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  authenticate: (token) => {},
  logout: () => {}
});

const removeAuthKeys = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("token-expiration");
};

const getRemainingTime = (expirationTime) => {
  const current = new Date().getTime();
  const expiration = new Date(expirationTime).getTime();

  return expiration - current;
};

const getStoredTokenInfo = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  const expiration = localStorage.getItem("token-expiration");
  let remaining;
  
  if (expiration) {
    remaining = getRemainingTime(expiration);

    if (remaining <= 60 * 1000) {
      removeAuthKeys();
      return null;
    }
  }

  return {
    token: token,
    remaining: remaining
  };
};

export const AuthContextProvider = ({ children }) => {
  const tokenInfo = getStoredTokenInfo();
  const [token, setToken] = useState(tokenInfo?.token);

  const logoutHandler = useCallback(() => {
    setToken(null);
    removeAuthKeys();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const authenticateHandler = (token, expiration) => {
    setToken(token);
    localStorage.setItem("token", token);
    console.log(token);

    if (expiration) {
      logoutTimer = setTimeout(logoutHandler, getRemainingTime(expiration));
      localStorage.setItem("token-expiration", expiration);
    }
  };

  useEffect(() => {
    if (tokenInfo?.remaining) {
      console.log("Remaining", tokenInfo.remaining);
      logoutTimer = setTimeout(logoutHandler, tokenInfo.remaining);
    }
  }, [tokenInfo, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: !!token,
    authenticate: authenticateHandler,
    logout: logoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
