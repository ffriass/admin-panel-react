import React from "react";
import "./list.scss";
import DataTable from "../../components/datatable/DataTable";
import Layout from "../../components/layout/Layout";

const List = () => {
  return (
    <Layout>
      <div className="listContainer">
        <DataTable/>
      </div>
    </Layout>
  )
}

export default List;
