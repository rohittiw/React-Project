import React from "react";
import { Typography, AppBar, Tab, Tabs, Box } from "@material-ui/core";
import CreateUser from "../../account/CreateUser";
import UserDetails from "../../account/UserDetails";
import VehicleDetails from "../../account/VehicleDetails";
import TopUp from "../../account/TopUp";
import useStyles from "../../common/style";

export default function SelectorTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const TabStyle = {
    background: "#f2f2f2",
    color: "black",
    outline: "0",
  };

  const TStyle = {
    background: "#f2f2f2",
    color: "black",
    outline: "0",
  };

  const selectedTab = {
    backgroundColor: "#00bc78",
    height: "4px",
    fontWeight: 700,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" className={classes.boxStyleNone}>
        <Tabs
          TabIndicatorProps={{ style: selectedTab }}
          style={TabStyle}
          value={value}
          onChange={handleChange}
        >
          <Tab label="User Register" style={TStyle} {...a11yProps(0)} />
          <Tab label="User Details" style={TStyle} {...a11yProps(1)} />
          <Tab label="Vehicle Details" style={TStyle} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CreateUser></CreateUser>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserDetails></UserDetails>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VehicleDetails></VehicleDetails>
          <TopUp></TopUp>
        </TabPanel>
      </AppBar>
    </>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      className="claims"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};
