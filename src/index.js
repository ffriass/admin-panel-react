import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./core/store/theme/darkMode-context";
import { AuthContextProvider } from "./core/store/auth-context";
import { AppContextProvider } from "./core/store/app-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AuthContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </AuthContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
