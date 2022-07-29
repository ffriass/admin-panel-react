import React from "react";
import "./list.scss";
import Users from "./Users";
//import DataTable from "../../components/datatable/DataTable";
import Layout from "../../components/layout/Layout";
//import { userColumns, userRows } from '../../services/metadata/datatable-definitions';
import Products from "./Products";
import Orders from "./Orders";
import { useLocation } from "react-router-dom";

const List = (content) => {
  const location = useLocation();
  return (
    <Layout>
      <div className="listContainer">
        {location.pathname == "/users" && <Users/>}
        {location.pathname == "/products" && <Products/>}
        {location.pathname == "/orders" && <Orders/>}
        {/* {content == "users" && <Users/>} */}
      </div>
    </Layout>
  )
}

export default List;
