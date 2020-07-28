import React from "react";
import { Grid } from "@material-ui/core";
import InputTextField from "../common/InputTextField";
import Button from "../common/StyleButotn";
import useStyles from "../common/style";
import { GOOGLE_MAP_KEY } from "../../config/secrets/Constants";
import { Map } from "react-google-maps";

export default function DistanceCalculation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleInputs = (name, event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const calculateDistance = () => {
    alert("Action needed...");
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.padding5}>
          <InputTextField
            label="Source"
            type="text"
            value={value.source}
            onChange={(event) => handleInputs("source", event)}
          />
        </Grid>
        <Grid item xs={12} className={classes.padding5}>
          <InputTextField
            label="Destination"
            type="text"
            value={value.destination}
            onChange={(event) => handleInputs("destination", event)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={calculateDistance}>
            Calculate
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
