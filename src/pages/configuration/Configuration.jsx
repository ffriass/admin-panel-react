import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TabPanel, { a11yProps } from "../../components/tab/TabPanel";
import { Person, PersonPinCircleOutlined } from "@mui/icons-material";
import Layout from "../../components/layout/Layout";
import Params from "../../UI/configuration/Params";

const Configuration = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box sx={{ width: "100%" }}>
        <Box
          style={{
            backgroundColor: "white",
            position: "relative",
            width: "100%"
          }}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs
            style={{ backgroundColor: "white" }}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            centered
          >
            <Tab label="Parametros" {...a11yProps(0)} />
            <Tab label="Matenimiento" {...a11yProps(1)} />
            <Tab label="Clientes" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Params />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <Employee /> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <Customer /> */}
        </TabPanel>
      </Box>
    </Layout>
  );
};

export default Configuration;
