import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// Local Components
import DropdownSandwitch from "../../utilis/dropdownSandwitch";

// Icons

import GiftIcon from "@material-ui/icons/CardGiftcard";
import BookIcon from "@material-ui/icons/ImportContacts";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BuildingIcon from "@material-ui/icons/Business";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  main__header: {
    display: "flex",
    background: "#f7f7f7",
    justifyContent: "space-around",
    alignContent: "center",

    // padding: '10px 20px',
    width: "100%!important",
    height: "40px",
    marginLeft: "-20px",
  },
  sandwitch__left: {},

  menu__item: {
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
function SubHeader() {
  const classes = useStyles();

  return (
    <div className={classes.main__header}>
      <div className={clsx(classes.menu__item, classes.sandwitch__left)}>
        <div>
          <DropdownSandwitch />
        </div>
      </div>

      <div className={classes.menu__item}>
        <div>
          <GiftIcon />
        </div>
      </div>

      <div className={classes.menu__item}>
        <div>
          <BookIcon />
        </div>
      </div>

      <div className={classes.menu__item}>
        <div>
          <YouTubeIcon />
        </div>
      </div>

      <div className={classes.menu__item}>
        <div>
          <BuildingIcon />
        </div>
      </div>

      <div className={classes.menu__item}>
        <div>
          <HomeIcon />
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
