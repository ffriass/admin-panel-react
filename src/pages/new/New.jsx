import React from 'react'
import './new.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import useFetch from "../../core/hooks/useFetch";
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Layout from '../../components/layout/Layout';


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <Layout>      
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <ValidatorForm>
              
            <div className="form-group mt-3">
            {/* <label>Email address</label> */}
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <TextValidator
                    className="form-control mt-3"
                    variant="outlined"
                    size="small"
                    label={input.label}
                    placeholder={input.placeholder}
                    // onChange={handleChange}
                    type={input.type}
                    name="email"
                    // value={userInfo.email}
                    validators={["required", "isEmail"]}
                    errorMessages={["this field is required", "email is not valid"]}
              />
              ))}            
              <button  type="submit" className="btn btn-primary">Guardar</button>
            
          </div>
            </ValidatorForm>
            {/* <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};     

export default New