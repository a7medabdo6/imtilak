import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
// Icons Components
import { useTranslation } from "react-i18next";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
// Local Components
import DropdownUser from "../utilis/dropdownUser";
import DropdownCurrency from "../utilis/dropdownCurrency";
import DropdownLang from "../utilis/dropdownLang";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginTop: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create("width"),
    width: "10vw",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  AppBar: {
    backgroundColor: theme.palette.secondary.main,
  },
  parentCard: {
    margin: "5px",
  },
  card: {
    padding: "3px",
    paddingBottom: "3px !important",
  },
  marginIcon: {
    margin: "3px 5px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        elevation={0}
        position="static"
        color={"secondary"}
        className={classes.AppBar}
      >
        <Toolbar>
          <div className={classes.search}>
            <div
              className={classes.searchIcon}
              style={{ left: `${i18n.language == "ar" ? "0px" : "unset"}` }}
            >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.card}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <PhoneInTalkIcon
                fontSize="small"
                className={classes.marginIcon}
              />
              <WhatsAppIcon
                fontSize="small"
                style={{ color: "#06d755" }}
                className={classes.marginIcon}
              />

              <Typography className={classes.marginIcon}>
                0090 507 4000 900
              </Typography>
            </Box>
          </Card>

          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.card}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <DropdownLang />
            </Box>
          </Card>

          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.card}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <DropdownCurrency />
            </Box>
          </Card>

          <Card variant="outlined" className={classes.parentCard}>
            <CardContent fontSize="small" className={classes.card}>
              <FacebookIcon fontSize="small" className={classes.marginIcon} />
              <TwitterIcon fontSize="small" className={classes.marginIcon} />
              <YouTubeIcon fontSize="small" className={classes.marginIcon} />
              <InstagramIcon fontSize="small" className={classes.marginIcon} />
              <TelegramIcon fontSize="small" className={classes.marginIcon} />
            </CardContent>
          </Card>

          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.card}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <DropdownUser isMobile={false} />
            </Box>
          </Card>

          <div className={classes.grow} />

          {/*
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>*/}

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
