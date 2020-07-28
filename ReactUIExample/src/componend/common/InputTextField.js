import React from "react";
import { TextField } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputTextField: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  containerTextField: {
    minWidth: "fit-content",
  },
  iconInfo: {
    color: "#999",
    "&:hover": {
      cursor: "pointer",
    },
  },
  starRequired: {
    color: "#ff3333",
  },
  label: {
    top: "inherit",
    left: "inherit",
  },
  inputText: {
    width: "50%",
  },
}));

const useCustomInputStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #e0e0e3",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

export default function InputTextField({
  isRequired,
  type,
  label,
  shrink,
  pattern,
  value,
  maxLength,
  InputProps,
  inputProps,
  ...props
}) {
  const classes = useStyles();
  const customInputClasses = useCustomInputStyles();
  return (
    <TextField
      variant={type === "date" ? "outlined" : "filled"}
      className={classes.inputText}
      InputLabelProps={{ className: classes.label, shrink }}
      InputProps={{
        classes: customInputClasses,
        disableUnderline: true,
        ...InputProps,
      }}
      type={type}
      //   inputProps={{
      //     pattern,
      //     maxLength,
      //     ...inputProps,
      //   }}
      label={label}
      value={value}
      {...props}
    />
  );
}
