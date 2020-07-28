import React from "react";
import CreateUser from "../account/CreateUser";
import UserDetails from "../account/UserDetails";
import VehicleDetails from "../account/VehicleDetails";
import Button from "../common/StyleButotn";
import TopUp from "../account/TopUp";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    fontWeight: 500,
    backgroundColor: "#00bc78",
    padding: "10px 10px",
    borderRadius: "4px",
    width: "17%",
    color: "white",
    "&:hover": {
      backgroundColor: "#ffc555",
      color: "black",
    },
    "&:focus": {
      backgroundColor: "#ffc555",
    },
  },
  padding: {
    padding: "24px",
  },
  coreContainer: {
    boxSizing: "border-box",
  },
}));

const SelectorTab = React.lazy(() =>
  import("../../componend/common/tab/SelectorTab")
);

export default function AccountDetails() {
  const classes = useStyles();

  const submitDetails = () => {
    alert("Action needed...");
  };
  return (
    <React.StrictMode>
      {/* <div className={classes.coreContainer}> */}
      <Router>
        <React.Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={SelectorTab} />
          </Switch>
        </React.Suspense>
        <Grid item xs={12} className={classes.padding}>
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={submitDetails}
          >
            Submit
          </Button>
        </Grid>
      </Router>
      {/* </div> */}
    </React.StrictMode>
  );
}
