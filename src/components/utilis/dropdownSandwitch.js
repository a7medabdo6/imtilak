import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from '@material-ui/icons/Subject';
import CloseIcon from '@material-ui/icons/Close';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


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
    marginTop: '105px',
  },
})((props) => (
  <Menu
    elevation={0}
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
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(!open);
  };


  return (
    <div>
      {
        anchorEl === null ?
          <MenuIcon className={classes.hoverIcon} onClick={handleClick} />
          :
          <CloseIcon className={classes.hoverIcon} onClick={handleClick} />

      }
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="English" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Frances" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Arabic" />
        </StyledMenuItem>

        <ListItem button onClick={handleClickOpen}>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>

      </StyledMenu>
    </div>
  );
}
