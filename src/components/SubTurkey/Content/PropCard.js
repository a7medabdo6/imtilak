/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// MUI Component
import { Box, Link, Typography, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import LocationIcon from '@material-ui/icons/LocationOn';
import MoneyIcon from '@material-ui/icons/AttachMoney';
// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";

function LimitText(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}



const useStyles = makeStyles((theme) => ({

  root: {
    // width: "auto",
    display: "flex",
    width: '350px',
    flexGrow: 1,
    backgroundColor: "#eee",
    margin: '10px',
  },
  root__inner: {
    display: 'flex',
    flexDirection: 'column',
  },
  CardMedia: {
    width: "100%",
    height: '170px',
    position: "relative",
  },
  CardContent: {
    flex: '1 0 1',
    flexWrap: 'nowrap',
    paddingBottom: '15px!important',
    color: 'rgba(55,64,77,.8)',
  },
  card__title: {
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: 'capitalize',
    textAlign: 'left',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  info: {
    display: 'flex',
    alignItems: 'left',
    marginLeft: '-7px',
    flexWrap: 'wrap',
  },
  info__item: {
    display: 'flex',
    alignItems: 'left',
    marginRight: '7px',
  },
  info__item__icon: {
    display: "inline",
    paddingBottom: '0!important',

  },
  info__item__subtitle: {
    textDecoration: 'none',
    textAlign: 'left',
    fontWeight: "400",
    fontSize: "1rem",
    marginBottom: '10px',
    color: theme.palette.primary.main,
  },
  card__price: {
    textAlign: 'left',
    color: theme.palette.primary.main,
    fontWeight: '800'
  },
  card__description: {
    textAlign: 'left',
    marginBottom: '10px',
  },
  span: {
    background: "#9c344c",
    padding: "8px",
    color: "white",
    display: "inline-block",
  },
  spanBut: {
    position: 'absolute',
    bottom: '0%',
    right: '0%',
    left: '0%',
    height: '35px',
    background: "linear-gradient(0deg, rgba(0,0,0,0.7175245098039216) 59%, rgba(255,255,255,0) 100%)",
    padding: "8px",
    color: "white",
    display: "inline-block",
    fontSize: '.9rem',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '0px',
  }

}));

function Index({
  date,
  img,
  title,
  location,
  type,
  payment,
  description,
  price,
}) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <div className={classes.root__inner}>

        <CardMedia
          className={classes.CardMedia}
          image="https://www.imtilak.net/uploads/properties/373/6bbfd9af6a0dede909d335a51e1a10997-3E.jpg"
          title="Live from space album cover"
        >

          <span className={classes.span}>{date}</span>
          <span className={classes.spanBut}>Conforms to conditions of Turkish citizenship</span>
        </CardMedia>

        <CardContent className={classes.CardContent}>

          <Typography className={classes.card__title} component="h5" variant="h5">
            {title}
          </Typography>

          <div className={classes.info}>

            <div className={classes.info__item}>
              <LocationIcon className={classes.info__item__icon} />
              <a href='#' className={classes.info__item__subtitle} component="h5" variant="h5">
                {location[0]}
              </a>
              <span style={{ marginRight: '2px' }}>,</span>
              <a href='#' className={classes.info__item__subtitle} component="h5" variant="h5">
                {location[1]}
              </a>
            </div>
            <div className={classes.info__item}>
              <HomeIcon className={classes.info__item__icon} />
              <a href='#' className={classes.info__item__subtitle} component="h5" variant="h5">
                {type}
              </a>
            </div>
            <div className={classes.info__item}>
              <MoneyIcon className={classes.info__item__icon} />
              <Typography href='#' className={classes.info__item__subtitle} component="h5" variant="h5">
                {payment}
              </Typography>
            </div>

          </div>
          <Typography className={classes.card__description}>
            {LimitText(description, 100)}
          </Typography>
          Starting at
          <Typography className={classes.card__price} component="h5" variant="h5">
            {price} $
          </Typography>

        </CardContent>
      </div>

    </Card>
  );
}

export default Index;
