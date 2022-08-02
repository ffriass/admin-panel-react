import React, { useState, useEffect, useContext } from "react";
import "../../components/datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { statusClassMapping, userColumns } from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { getUsers, setAgentStatus } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";
import NewUserModal from "../../components/modal/NewUserModal";
import { Button } from "react-bootstrap";
import { userInputs } from "../../services/metadata/form-source";
import { confirmAlert } from "react-confirm-alert";
import AppContext from "../../core/store/app-context";

const Employee = () => {
  const [pageSize] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const [response, callback, isloading] = useFetch(
    getUsers("employees", 0, pageSize)
  );
  const [data, setData] = useState(response?.payload?.data);
  const [rowCountState, setRowCountState] = useState(
    response?.payload?.rowCount || 0
  );
  const appContext = useContext(AppContext);

  const handleApproval = (email, status) => {  
    confirmAlert({
      title: 'Confirmar',
      message: 'Estas seguro de enviar el cambio?',
      buttons: [
        {
          label: 'Si',
          onClick: () => { callback(
            setAgentStatus({ email: email, approved: status != "Approved" }, true),
            (result) => {
              if(!result.isSuccess)
                  appContext.showAlert({ title: "Error", message: result.error.message, severity:"error" });
              else
                  appContext.showAlert({ title: "Success", message: result.message });
      
              callback(getUsers("agents", 0, pageSize), (result) => {
                setData(result.data);
                // setPage(newPage);
              });
            }
          );}
        },
        {
          label: 'No'
        }
      ]
    });
  };

  const handlePageChange = (newPage) => {
    callback(getUsers("employees", newPage, pageSize), (result) => {
      setData(result.data);
    });
  };

  const actionColumn = [
    {
      field: "statusName",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${ statusClassMapping(params.row.isActive ? params.row.statusName : "Inactive")}`} >
            { params.row.isActive && params.row.statusName == "Unknown" ? "Pending" : !params.row.isActive ? "Inactive": params.row.statusName }
          </div>
        );
      }
    },
    {
      field: "action",
      headerName: "Opcion",
      width: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} className="link">
              <div className="viewButton">Ver</div>
            </Link>
            <Link to={`/users/${params.row.id}/edit`} className="link">
              <div className="neutralButton">Editar</div>
            </Link>
            <div
              className={
                params.row.statusName == "Approved"
                  ? "inactiveButton"
                  : "activeButton"
              }
              onClick={() =>
                handleApproval(params.row.email, params.row.statusName)
              }
            >
              {params.row.statusName == "Approved" ? "Inactivar" : "Activar"}
            </div>
          </div>
        );
      }
    }
  ];

  useEffect(() => {
    setData(response?.payload?.data);
    setRowCountState((prevRowCountState) =>
      response?.payload?.rowCount !== undefined
        ? response?.payload?.rowCount
        : prevRowCountState
    );
  }, [response?.payload?.rowCount, setRowCountState]);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div>Empleados</div>
        <Button onClick={() => setModalShow(true)} >
          <AddIcon />
        </Button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data || []}
        columns={userColumns.concat(actionColumn)}
        pageSize={pageSize}
        rowCount={rowCountState}
        loading={isloading}
        autoHeight
        paginationMode="server"
        onPageChange={handlePageChange}
        // checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
      <NewUserModal
      title="Agregar Empleado"
      show={modalShow}
      inputs={userInputs}
      onHide={() => setModalShow(false)}
      onReload={() => handlePageChange(0)}
      />
    </div>
  );
};

export default Employee;
