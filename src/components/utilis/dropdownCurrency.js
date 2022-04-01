import React from "react";
import { withStyles, alpha, makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import currency from "./Currency";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    width: {
      width: "500px !important",
    },
    hoverIcon: {
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      }
    }
  })
);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "170px",
  },
})((props) => (
  <Menu
    elevation={0}
    style={{ width: "170px" }}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AttachMoneyIcon className={classes.hoverIcon} onClick={handleClick} />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {currency.map((e) => {
          return (
            <StyledMenuItem>
              <ListItemIcon>
                <Typography>
                  <span dangerouslySetInnerHTML={{ __html: e.symbol }} />
                </Typography>
              </ListItemIcon>
              <ListItemText primary={e.abbreviation} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}
