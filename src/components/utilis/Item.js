import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "70%",
    left: "15% !important",
    color: "#5f6670",
    background: "#f2f2f2",
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
      backgroundColor: "transparent",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        //color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({ title }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        onClick={handleClick}
        justifyContent="center"
        flexDirection="row"
        display="flex"
        style={{ cursor: "pointer", margin: "5px", color: "#5f6670" }}
      >
        <Typography>{title}</Typography>
        <ArrowDropDownIcon />
      </Box>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        className="menuu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText
            color="primary"
            style={{ color: "#9c344c" }}
            primary="Sent mail"
          />

          <ListItemText primary="Sent mail" />

          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText
            color="primary"
            style={{ color: "#9c344c" }}
            primary="Sent mail"
          />

          <ListItemText primary="Sent mail" />

          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>{" "}
        <StyledMenuItem>
          <ListItemText
            color="primary"
            style={{ color: "#9c344c" }}
            primary="Sent mail"
          />

          <ListItemText primary="Sent mail" />

          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>{" "}
        <StyledMenuItem>
          <ListItemText
            color="primary"
            style={{ color: "#9c344c" }}
            primary="Sent mail"
          />

          <ListItemText primary="Sent mail" />

          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>{" "}
        <StyledMenuItem>
          <ListItemText
            color="primary"
            style={{ color: "#9c344c" }}
            primary="Sent mail"
          />

          <ListItemText primary="Sent mail" />

          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>{" "}
        <StyledMenuItem>
          <ListItemText
            color="primary"
            style={{ color: "#9c344c" }}
            primary="Sent mail"
          />

          <ListItemText primary="Sent mail" />

          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>{" "}
        <StyledMenuItem>
          <ListItemText
            color="primary"
            style={{ color: "#9c344c" }}
            primary="Sent mail"
          />

          <ListItemText primary="Sent mail" />

          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
