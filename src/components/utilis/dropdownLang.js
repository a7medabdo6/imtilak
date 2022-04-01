import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import LanguageIcon from "@material-ui/icons/Language";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  rootFirstSelect: {
    padding: "5px",
    color: "black",
  },
  width: {
    width: "500px !important",
  },
  hoverIcon: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function CustomizedMenus() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const [age, setAge] = React.useState("en");
  const [dispayIcon, setdispayIcon] = React.useState(true);
  const [dir, setDir] = React.useState("ltr");
  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    if (i18n.language == "ar") {
      setDir("rtl");
    } else {
      setDir("ltr");
    }
  };
  const handleChange = (event) => {
    setdispayIcon(false);
    setAge(event.target.value);
    changeLanguageHandler(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{
            padding: "0px",
            top: "-17px",
            left: "-11px",
          }}
        >
          {" "}
          <LanguageIcon
            className={classes.hoverIcon}
            style={{
              padding: "0px",
              top: "-13px",
              left: "2px",

              color: "black",
              display: `${dispayIcon ? "block" : "none"}`,
            }}
          />
        </InputLabel>

        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //value={age}
          onChange={handleChange}
          classes={{ root: classes.rootFirstSelect }}
        >
          <MenuItem value={"ar"}>Arabic</MenuItem>
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"fr"}>France</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
