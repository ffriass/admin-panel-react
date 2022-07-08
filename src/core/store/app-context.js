import React, { useCallback, useState } from "react";

const INITIAL_ALERT_OPTIONS = {
  anchorOrigin: { vertical: "top", horizontal: "right" },
  severity: "success",
  title: "",
  message: "",
  open: false,
  duration: 5000
};

const AppContext = React.createContext({
  isLoading: false,
  alertOptions: INITIAL_ALERT_OPTIONS,
  showAlert: (options) => {},
  closeAlert: (options) => {},
  showLoading: (value) => {}
});

let alertTimeout;

export const AppContextProvider = ({ children }) => {
  const [isLoading, setILoading] = useState(false);
  const [alertOptions, setAlert] = useState(INITIAL_ALERT_OPTIONS);

  const loadingHandler = (value) => {
    setILoading(!!value);
  };

  const closeAlertHandler = useCallback(() => {
      setAlert({
        ...alertOptions,
        open: false
      });
  },[]);

  const alertHandler = (options) => {
    setAlert({
      ...alertOptions,
      ...options,
      open: true
    });

    if (alertOptions.duration) {
        setTimeout(closeAlertHandler, alertOptions.duration);
    }
  };

  const appOptions = {
    isLoading: isLoading,
    alertOptions: alertOptions,
    showAlert: alertHandler,
    closeAlert: closeAlertHandler,
    showLoading: loadingHandler
  };

  return (
    <AppContext.Provider value={appOptions}>{children}</AppContext.Provider>
  );
};

export default AppContext;
