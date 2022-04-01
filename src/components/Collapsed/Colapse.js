import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleCollapse({ label, text }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
        marginBlock: "5px",
      }}
    >
      <FormControlLabel
        style={{ textAlign: `${i18n.language == "ar" ? "right" : "left"}` }}
        control={
          <Typography
            onClick={handleChange}
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            {checked ? (
              <RemoveCircleOutlineIcon
                style={{
                  marginInline: "10px",
                }}
              />
            ) : (
              <ControlPointIcon style={{ marginInline: "10px" }} />
            )}
            {label}
          </Typography>
        }
      />
      <div className={classes.container}>
        <Collapse in={checked} style={{ marginBlock: "10px" }}>
          <Typography
            style={{ marginBlock: "10px", color: "rgb(95, 102, 112)" }}
          >
            {text}
          </Typography>
          <Typography style={{ marginBlock: "10px", fontWeight: "bold" }}>
            Click here for more details
          </Typography>
        </Collapse>
      </div>
    </div>
  );
}
