/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// MUI Component
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Link: {
    textDecoration: 'none',
  },
  backBlock: {
    borderRadius: '8px',
    border: '1px solid #c5c5c5',
    background: '#fff',
    marginTop: '20px',
  },

  btn: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: '100%',
    fontSize: "18px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: 'inherit',
      color: theme.palette.primary.main,
      border: "1px solid #9c344c",
      transition: "all .3s ease",
    },

  },
}));

function Index(props) {
  const classes = useStyles();

  return (
    <div className={classes.backBlock}>
      <a href="#" className={classes.Link}>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          variant="contained"
          className={classes.btn}
          onClick=''
        >
          View all
        </Button>
      </a>
    </div >
  );
}

export default Index;