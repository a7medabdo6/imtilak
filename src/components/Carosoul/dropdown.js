import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import {
  Box,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    color: "white",
    margin: "0px",
    width: "100%",
    backgroundColor: "#efefef !important",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  border: {

    color: "black",
  },
  icon: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function CustomizedMenus({ data, label }) {
  const classes = useStyles();

  const [city, setCity] = React.useState(label);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ margin: "20px 0px" }}>
      <Box
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        display="flex"
        className={classes.border}
      >
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          className={classes.card}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city}
          inputProps={{
            classes: {
              root: classes.border,

              icon: classes.icon,
            },
          }}
          onChange={handleChange}
        >
          <MenuItem value={label}>{label}</MenuItem>
          {data.map((e) => {
            return <MenuItem value={e}>{e}</MenuItem>;
          })}
        </Select>
      </Box>
    </div>
  );
}
