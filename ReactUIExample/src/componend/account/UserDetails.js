import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import TextField from "../common/InputTextField";
import useStyles from "../common/style";

export default function UserDetails() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleInputs = (name, event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6} className={classes.padding10}>
          <Paper elevation={3} square>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.leftAlign}>
                  User Details
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="First Name"
                  type="text"
                  value={value.firstname}
                  onChange={(event) => handleInputs("firstname", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Last Name"
                  type="text"
                  value={value.lastname}
                  onChange={(event) => handleInputs("lastname", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Email"
                  type="email"
                  value={value.email}
                  onChange={(event) => handleInputs("email", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Phone Number"
                  type="phonenumber"
                  value={value.phone_number}
                  onChange={(event) => handleInputs("phone_number", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Date Of Birth"
                  type="date"
                  value={value.date}
                  shrink={true}
                  onChange={(event) => handleInputs("date", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="License State"
                  type="text"
                  value={value.license_state}
                  onChange={(event) => handleInputs("license_state", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="License Number"
                  type="text"
                  value={value.license_number}
                  onChange={(event) => handleInputs("license_number", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Address Line 1"
                  type="text"
                  value={value.line1}
                  onChange={(event) => handleInputs("line1", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Address Line 2"
                  type="text"
                  value={value.line2}
                  onChange={(event) => handleInputs("line2", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="City"
                  type="text"
                  value={value.city}
                  onChange={(event) => handleInputs("city", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="State"
                  type="text"
                  value={value.state}
                  onChange={(event) => handleInputs("state", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="County"
                  type="text"
                  value={value.county}
                  onChange={(event) => handleInputs("county", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Country"
                  type="text"
                  value={value.country}
                  onChange={(event) => handleInputs("country", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <TextField
                  label="Zip Code"
                  type="text"
                  value={value.zipcode}
                  onChange={(event) => handleInputs("zipcode", event)}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
