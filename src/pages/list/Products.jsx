import React from "react";
import "./list.scss";
import "../../components/datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  productColumns,
  productDetailColumns
} from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import useFetch from "../../core/hooks/useFetch";
import { getServices } from "../../services/api/actions";
import Layout from "../../components/layout/Layout";
import { Grid } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Products = () => {
  const [response, callback, isloading] = useFetch(getServices());
  const [data, setData] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  const [selectedDetail, setSelectedDetail] = useState([]);

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
  };

  const onRowClick = (e) => {
    setSelectedServiceId(e.id);
    setSelectedDetail(data?.find((x) => x.id == e.id)?.details);
  };

  /*const handlePageChange = (newPage) => {    
    callback(getUsers("agents", newPage, pageSize), result => {      
      setData(result.data);
    });
  };*/

  const actionColumn = [
    {
      field: "action",
      headerName: "Opcion",
      width: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/products/${params.row.id}`} className="link">
              <div className="viewButton">Ver</div>
            </Link>
            <div
              className="neutralButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Editar
            </div>
          </div>
        );
      }
    }
  ];

  useEffect(() => {
    setData(response?.payload?.data);
    setSelectedServiceId(response?.payload?.data[0].serviceId);
    setSelectedDetail((prev) =>
      response?.payload?.data !== undefined
        ? response?.payload?.data[0]?.details
        : prev
    );
  }, [response?.payload?.data]);

  return (
    <Grid container className="charts">
      <Grid md={12} lg={8}>
        <div className="datatable">
          <div className="datatableTitle">
            <h6>Servicios</h6>
            <Link to="/products/new" className="link">
              <AddIcon />
            </Link>
          </div>
          <DataGrid
            style={{ height: 600, width: "100%" }}
            className="datagrid"
            rows={data || []}
            columns={productColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onRowClick={onRowClick}
            getRowHeight={() => 50}
            // getEstimatedRowHeight={() => 20}
            loading={isloading}
            autoHeight
            // paginationMode='server'
            // onPageChange={handlePageChange}
            // checkboxSelection
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      </Grid>
      <Grid md={12} lg={4}>
        <div className="datatable">
          <div className="datatableTitle">
            <h6>Detalle de Precios</h6>
            {/* <Link to="/product/new">
                <AddIcon />
              </Link>
              <Link to="/product/new">
                <Edit />
              </Link> */}
          </div>
          <div
            style={{
              color: `${
                selectedDetail.length > 0
                  ? "green"
                  : "red"
              }`,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {data?.find((x) => x.id == selectedServiceId)?.name}
          </div>
          <DataGrid
            style={{ height: 568, width: "100%" }}
            className="datagrid"
            getRowHeight={() => 50}
            rows={selectedDetail || []}
            columns={productDetailColumns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            loading={isloading}
            autoHeight
            pagination
            height={"100%"}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Products;
