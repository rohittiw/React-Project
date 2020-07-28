import React from "react";
import {
  Paper,
  Grid,
  Typography,
  MenuItem,
  TextField,
} from "@material-ui/core";
import InputTextField from "../common/InputTextField";
import useStyles from "../common/style";

const Vehicles = [
  {
    key: 1,
    value: "Car",
  },
  {
    key: 2,
    value: "Bus",
  },
];

export default function CreateUser() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const [vin, setVin] = React.useState("");

  const handleInputs = (name, event) => {
    setVin({ ...vin, [name]: event.target.value });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6} className={classes.padding10}>
          <Paper elevation={3} square>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.leftAlign}>
                  Vehicle Details
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <InputTextField
                  label="VIN"
                  type="text"
                  value={vin.vin_number}
                  onChange={(event) => handleInputs("vin_number", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  select
                  className={classes.dropField50}
                  InputLabelProps={{ required: true }}
                  name="vehicles"
                  label="Passenger Vehicles"
                  value={value.vehicles}
                  variant="outlined"
                  onChange={handleChange}
                >
                  {Vehicles.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
