import { Container, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import useFetch from "../../core/hooks/useFetch";
import AppContext from "../../core/store/app-context";
import { createUser } from "../../services/api/actions";

const NewUserModal = (props) => {

  const [response, create, isLoading] = useFetch();
  const [userInfo, setUserInfo] = useState({});
  const appContext = useContext(AppContext);

  const handleChange = ({ target: { name, value } }) => {
    let temp = { ...userInfo };
    temp[name] = value;
    setUserInfo(temp);
  };
  const handleFormSubmit = () => {
    create(createUser(userInfo), (result) => {
      if (result.isSuccess) {
        
        appContext.showAlert({
          title: "Registro completado",
          message: result.message,
        });
        props.onReload();
        props.onHide();
      } else {
        appContext.showAlert({
          title: "Error",
          message: result.error.message,
          // strongMessage: "Try Again!",
          severity:"error"
        });
      }
    });
  };
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <ValidatorForm onSubmit={handleFormSubmit}>
        <Modal.Body>
          <div className="form-group mt-3">
            <Grid container spacing={2}>
              {props.inputs.map((input) => (
                <Grid item xs={12} md={6}>
                  <TextValidator
                    className="form-control mt-3"
                    variant="outlined"
                    size="small"
                    label={input.label}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    type={input.type}
                    name={input.name}
                    value={userInfo[input.name]}
                    validators={input.validators}
                    errorMessages={input.errorMessages}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Cancelar</Button>
          <Button disabled={props.disabled} type="submit">Guardar</Button>
        </Modal.Footer>
      </ValidatorForm>
    </Modal>
  );
};

export default NewUserModal;
