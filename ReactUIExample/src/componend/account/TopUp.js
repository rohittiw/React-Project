import React from "react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from "@material-ui/core";
import InputTextField from "../common/InputTextField";
import useStyles from "../common/style";

const distance = [
  {
    key: 1,
    value: "200 miles",
  },
  {
    key: 2,
    value: "300 miles",
  },
];
const duration = [
  {
    key: 1,
    value: "60 days",
  },
  {
    key: 2,
    value: "10 days",
  },
];

const accidents = [
  {
    key: 1,
    value: "0",
  },
  {
    key: 2,
    value: "1",
  },
];

const violations = [
  {
    key: 1,
    value: "0",
  },
  {
    key: 2,
    value: "1",
  },
];

const driver = [
  {
    key: 1,
    value: "Yes",
  },
  {
    key: 2,
    value: "No",
  },
];

export default function CreateUser() {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const [date, setDate] = React.useState("");
  const handleInputs = (name, event) => {
    setDate({ ...date, [name]: event.target.value });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6} className={classes.padding10}>
          <Paper elevation={3} square>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.leftAlign}>
                  Top Up Details
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography>Distance to be insured:</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      className={classes.dropField}
                      InputLabelProps={{ required: true }}
                      name="distance"
                      value={value.distance}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      {distance.map((option) => (
                        <MenuItem key={option.key} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography>Total duration:</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      className={classes.dropField}
                      InputLabelProps={{ required: true }}
                      name="duration"
                      value={value.duration}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      {duration.map((option) => (
                        <MenuItem key={option.key} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography>Start date:</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      type="date"
                      variant="outlined"
                      className={classes.dropField}
                      value={date.date}
                      onChange={(event) => handleInputs("date", event)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography>Number of accidents:</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      className={classes.dropField}
                      InputLabelProps={{ required: true }}
                      name="accident"
                      value={value.accident}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      {accidents.map((option) => (
                        <MenuItem key={option.key} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography>Number of violations:</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      className={classes.dropField}
                      InputLabelProps={{ required: true }}
                      name="voilation"
                      value={value.voilation}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      {violations.map((option) => (
                        <MenuItem key={option.key} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography>Good driver discount:</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      className={classes.dropField}
                      InputLabelProps={{ required: true }}
                      name="driver"
                      value={value.driver}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      {driver.map((option) => (
                        <MenuItem key={option.key} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
