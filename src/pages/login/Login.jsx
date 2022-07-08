import React, { useState, useContext } from "react";
import "./login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
//import { Card, Grid, Button, CircularProgress } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import useFetch from "../../core/hooks/useFetch";
import VerticalBarsLoading from "../../components/loading-indicator/Loading";
import { login } from "../../services/api/actions";
import AuthContext from "../../core/store/auth-context";
import AppContext from "../../core/store/app-context";

const Login = () => {
  const [response, authenticate, isLoading] = useFetch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [isResetPassword, setResetPassword] = useState(false);
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  const handleChange = ({ target: { name, value } }) => {
    let temp = { ...userInfo };
    temp[name] = value;
    setUserInfo(temp);
  };

  const resetPasswordHandler = () => {
    setResetPassword(!isResetPassword);
  };

  const handleFormSubmit = (event) => {
    try {
      if (!isResetPassword) {
        authenticate(login(userInfo), (result) => {
          if (result.isSuccess) {
            const exp = new Date(
              new Date().getTime() + 60 * 60 * 1000
            ).toISOString();
            appContext.showAlert({
              title: "Good",
              message: "Has been logged successfully!"
            });
            authContext.authenticate(result.data /*, exp*/);
            navigate("/", { replace: true });
          } else {
            console.log("jjajaajaj")
            appContext.showAlert({
              title: "Invalid",
              message: "Your email or password are incorrect",
              // strongMessage: "Try Again!",
              severity:"error"
            });
          }
        });
      } else {
        //Todo: call endpoint to reset password
        setResetPassword(!isResetPassword);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="auth-form-container">
      <ValidatorForm onSubmit={handleFormSubmit} className="auth-form">
        <div className="auth-form-content">
          <h3 className="auth-form-title">
            {!isResetPassword ? "Sign In" : "Recover password"}
          </h3>
          <div className="form-group mt-3">
            {/* <label>Email address</label> */}
            <TextValidator
              className="form-control mt-1"
              variant="outlined"
              size="small"
              label="Email"
              placeholder="user@example.com"
              onChange={handleChange}
              type="email"
              name="email"
              value={userInfo.email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Password</label> */}

            {!isResetPassword && (
              <TextValidator
                className="form-control mt-1"
                label="Password"
                variant="outlined"
                size="small"
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Yor secret password"
                value={userInfo.password}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            )}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {!isResetPassword ? "Login" : "Send request"}
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="#" onClick={resetPasswordHandler}>
              {!isResetPassword ? "Forgot password?" : "Login"}
            </a>
          </p>
        </div>
      </ValidatorForm>
      <VerticalBarsLoading loading={isLoading} />
    </div>
  );
};

export default Login;
