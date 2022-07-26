import "./style/dark.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NotFound from "./pages/404/404";
import { Alert, AlertTitle, Snackbar, Slide } from "@mui/material";
import { userInputs, productInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./core/store/theme/darkMode-context";
import AuthContext from "./core/store/auth-context";
import AppContext from "./core/store/app-context";
import VerticalBarsLoading from "./components/loading-indicator/Loading";
import Users from "./pages/list/Users";
import Products from "./pages/list/Products";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  console.log("Alert: ",appContext.alertOptions);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <VerticalBarsLoading loading={appContext.isLoading} />
      <BrowserRouter>
        <Routes>
          {authContext.isLoggedIn ? (
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add new User" />}
                />
              </Route>
              <Route path="orders">
                <Route index element={<List />} />
                <Route path=":orderId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add new Order" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<Products />} />
                {/* <Route path=":productId" element={<Single />} /> */}
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add new Product" />
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          ) : (
            <Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
      
      <Snackbar {...appContext.alertOptions}>
        <Alert onClose={() => appContext.closeAlert()} severity={appContext.alertOptions.severity}>
          <AlertTitle>{appContext.alertOptions.title}</AlertTitle>
          {appContext.alertOptions.message}. <strong>{/*appContext.alertOptions.strongMessage*/}</strong>
        </Alert>
      </Snackbar>
    </div>
  );
}
export default App;
