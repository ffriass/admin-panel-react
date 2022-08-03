import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../components/tab/TabPanel";
import { Person, PersonPinCircleOutlined } from "@mui/icons-material";
import Employee from "../../UI/users/Employee";
import Agent from "../../UI/users/Agent";
import Customer from "../../UI/users/Customer";

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
    <Box sx={{ width: "100%" }}>
      <Box
        style={{ backgroundColor: "white", position: "relative", width: "100%" }}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          style={{ backgroundColor: "white" }}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
        >
          <Tab label="Agentes" {...a11yProps(0)} />
          <Tab label="Empleados" {...a11yProps(1)} />
          <Tab label="Clientes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Agent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Employee />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Customer />
      </TabPanel>
    </Box>
  );
}
