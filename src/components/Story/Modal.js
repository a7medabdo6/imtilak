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
    width: "50%",
    height: "100%",
    margin: "auto !important",
    marginTop: "40px",
    padding: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent",
    border: "unset",
    boxShadow: "unset",
    width: "40%",
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
      <img
        data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
        alt="أفضل مشاريع أنطاليا - تملك واستثمار"
        class="owl-lazy"
        width="100%"
        height="90%"
        src="https://www.imtilak.net/uploads/amp_stories/d65dbd392931806555d5629279adb639zC7938.jpg"
      />
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        <span
          class="item d-block text-center"
          target="_blank"
          rel="noreferrer"
          style={{ textAlign: "center" }}
        >
          <div class="circle">
            <img
              data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
              alt="أفضل مشاريع أنطاليا - تملك واستثمار"
              class="owl-lazy"
              src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
            />
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              dir="ltr"
            >
              <circle cx="50" cy="50" r="40"></circle>
            </svg>
          </div>
          <span class="name text-center">
            {" "}
            أفضل مشاريع أنطاليا - تملك واستثمار
          </span>
        </span>
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
