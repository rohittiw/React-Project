import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import InputTextField from "../common/InputTextField";
import useStyles from "../common/style";

export default function CreateUser() {
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
                  Create Your Account
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <InputTextField
                  label="Username"
                  type="text"
                  value={value.username}
                  onChange={(event) => handleInputs("username", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <InputTextField
                  label="Password"
                  type="password"
                  value={value.password}
                  onChange={(event) => handleInputs("password", event)}
                />
              </Grid>
              <Grid item xs={12} className={classes.padding5}>
                <InputTextField
                  label="Confirm your password"
                  type="password"
                  value={value.confirm_password}
                  onChange={(event) => handleInputs("confirm_password", event)}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
