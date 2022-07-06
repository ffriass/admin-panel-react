import React from "react";
import "./list.scss";
import DataTable from "../../components/datatable/DataTable";
import Layout from "../../components/layout/Layout";
import { userColumns, userRows } from '../../datatable-source';

const List = () => {

  console.log("Created List");
  return (
    <Layout>
      <div className="listContainer">
        <DataTable/>
      </div>
    </Layout>
  )
}

export default List;
