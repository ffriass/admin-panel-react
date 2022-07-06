import React, { useState } from "react";
import "./login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
//import { Card, Grid, Button, CircularProgress } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import useFetch from "../../core/hooks/useFetch";
import VerticalBarsLoading from "../../components/loading-indicator/Loading";
import { login } from "../../services/api/actions";


const Login = () => {

  const [response, authenticate, isLoading] = useFetch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");


  const handleChange = ({ target: { name, value } }) => {
    let temp = { ...userInfo };
    temp[name] = value;
    setUserInfo(temp);
  };
  console.log("Created login");
  
  const handleFormSubmit = (event) => {
    try {
      authenticate(login(userInfo), (result) => {

        console.log("Data: " ,result)
        if(result.isSuccess){
          navigate('/', {replace: true});
        }
      });     

    } catch (e) {
      console.log(e);
      setMessage(e.message);
    }
  };

  return (
    <div className="auth-form-container">
    <ValidatorForm onSubmit={handleFormSubmit} className="auth-form">
      <div className="auth-form-content">
        <h3 className="auth-form-title">Sign In</h3>
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
            validators={['required', 'isEmail']}
            errorMessages={[
                'this field is required',
                'email is not valid',
            ]}/>
        </div>
        <div className="form-group mt-3">
          {/* <label>Password</label> */}
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
              validators={['required']}
              errorMessages={['this field is required']}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <Link to="/login">password?</Link>
        </p>
      </div>
    </ValidatorForm>   
    <VerticalBarsLoading loading ={isLoading}/>
  </div>
  );
};

export default Login;
