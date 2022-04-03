import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography, Box } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    //  top: `${top}%`,
    // left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    height: "90%",
    margin: "40px",
    backgroundColor: "gray",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "0px",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        <Box style={{ width: "100%" }}>
          <img
            alt="img"
            style={{
              width: "100%",
              height: "110px",
              borderRadius: "10px",
            }}
            src="https://i.ytimg.com/vi/zYDcpdCHxAM/hqdefault.jpg"
          />
        </Box>
        <Typography style={{ width: "100%", margin: "10px 10px" }}>
          Apartments For Sale In The Luxurious NISHANTASHI | Carlton Project In
          Istanbul
        </Typography>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
