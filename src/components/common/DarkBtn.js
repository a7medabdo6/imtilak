import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  dark__btn_big: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderRadius: "0",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    cursor: "pointer",
    background: "#000",
    color: "#fff",
    fontWeight: "700",
    fontSize: "1.1rem",
    border: "1px",
    height: "40px",
    width: "150px",
    "&:hover": {
      backgroundColor: "#000",
      boxShadow: "none",
    },
  },
}));

function DarkBtn({ onClick, text = "text" }) {
  const classes = useStyles();

  return (
    <Button
      // disableRipple
      onClick={onClick}
      variant="contained"
      size="large"
      color="primary"
      className={classes.dark__btn_big}
    >
      {text}
    </Button>
  );
}

export default DarkBtn;
