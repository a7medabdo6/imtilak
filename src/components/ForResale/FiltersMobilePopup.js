import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

// Common Component
import DarkBtn from "../common/DarkBtn";
// Local Components
import TypeFilterItem from "./TypeFilterItem";
import LocationFilterItem from "./LocationFilterItem";
import PriceSpaceFilterItem from "./PriceSpaceFilterItem";

const useStyles = makeStyles((theme) => ({
  btn: {
    alignItems: "center",
    borderRadius: "8px",
    marginTop: theme.spacing(3),
    background: "#9c344c",
    color: "#fff",
    fontWeight: "700",
    fontSize: "1.4rem",
    border: "1px",
    height: "60px",
    width: "100%",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#9c344c",
      boxShadow: "none",
    },
  },
  btnAction: {
    margin: "0 auto",
  },
  content: {
    /* width: '500px',*/
  },
  dialogContent: {
    display: "flex",
    flexShrink: 0,
  },
}));

export default function AlertDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        <SearchIcon /> Open alert dialog
      </Button>

      <Dialog
        className={classes.dialogContent}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.content}>
          <TypeFilterItem />
          <LocationFilterItem />
          <PriceSpaceFilterItem />
        </DialogContent>

        <DialogActions className={classes.btnAction}>
          <DarkBtn onClick={handleClose} text={"Search"} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
