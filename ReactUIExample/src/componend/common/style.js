import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  padding5: {
    paddingTop: "10px",
    paddingBottom: "5px",
    paddingLeft: "10px",
  },
  padding10: {
    paddingBottom: "10px",
  },
  dropField: {
    paddingBottom: "10px",
    width: "100%",
  },
  dropField50: {
    paddingBottom: "10px",
    width: "50%",
  },
  // headerStyle: {
  //   color: "white",
  //   background: "#00bc78",
  //   padding: "10px",
  //   fontWeight: "bold",
  // },
  boxStyleNone: {
    boxShadow: "none !important",
    backgroundColor: "currentColor",
  },
  leftAlign: {
    textAlign: "left",
    color: "white",
    background: "#00bc78",
    padding: "10px",
    fontWeight: "bold",
  },
}));

export default useStyles;
