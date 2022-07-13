import  React, {useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Layout from "../../components/layout/Layout";
import DataTable from "../../components/datatable/DataTable";
import TabPanel from "../../components/tab/TabPanel";
import { Person, PersonPinCircleOutlined } from "@mui/icons-material";
import Agent from "./UI/Agent";
import Employee from "./UI/Employee";
import Customer from "./UI/Customer";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div className="listContainer">
        <Box sx={{ width: "100%" }}>
          <Box style={{backgroundColor:"gray",position:"fixed",width:"90%"}} sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
                style={{backgroundColor:'whitesmoke'}}
                value={value}
                onChange={handleChange}
                  variant="fullWidth"
                 centered
                >
              <Tab label="Agents" {...a11yProps(0)} />
              <Tab label="Employees" {...a11yProps(1)} />
              <Tab label="Customers" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Agent/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Employee/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Customer/>
          </TabPanel>
        </Box>
      </div>
    </Layout>
  );
}
