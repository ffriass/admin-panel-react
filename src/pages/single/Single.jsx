// import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Transactions from "../../components/table/Transactions";
import { getServices } from "../../services/api/actions";
import Layout from "../../components/layout/Layout";
import useFetch from "../../core/hooks/useFetch";
import AgentDetail from "../../UI/users/AgentDetail";

const Single = () => {

  var [response, loadServices, isLoading] = useFetch();

  const handleFetch = () => {

    loadServices(getServices());
  };

  return (
    <Layout>
      <AgentDetail/>
    </Layout>
  );
};

export default Single;
