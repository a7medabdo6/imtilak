import React from "react";
// MUI Component
import { Box, Link, Typography, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import LocationIcon from '@material-ui/icons/LocationOn';
// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({

 root: {
  width: "100%",
  backgroundColor: "#eee",
  marginBottom: '20px',
 },
 root__inner: {
  marginBottom: '0',
  paddingBottom: '0',
  display: 'flex',

 },
 CardMedia: {
  width: "30%",
  position: "relative",
 },
 CardContent: {
  flex: '1 0 1',
  flexWrap: 'nowrap',
  paddingBottom: '15px!important'
 },
 card__title: {
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: 'capitalize',
  textAlign: 'left',
  lineHeight: '1.5',
  marginBottom: '20px',
 },
 info: {
  display: 'flex',
  alignItems: 'left',
  marginLeft: '-7px',
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
  textAlign: 'left',
  fontWeight: "400",
  fontSize: "1rem",
  marginBottom: '20px',
  color: '#666',
 },
 card__price: {
  textAlign: 'left',
  color: theme.palette.primary.main,
fontWeight: '800'
 },
 span: {
  background: "#9c344c",
  padding: "8px",
  color: "white",
  display: "inline-block",
 },

}));

function Index(props) {
 const { date, location, space, rooms, price, title } = props

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
    </CardMedia>

    <CardContent className={classes.CardContent}>

     <Typography className={classes.card__title} component="h5" variant="h5">
      {title}
     </Typography>

     <div className={classes.info}>

      <div className={classes.info__item}>
       <LocationIcon className={classes.info__item__icon} />
       <Typography className={classes.info__item__subtitle} component="h5" variant="h5">
        {location}
       </Typography>
      </div>
      <div className={classes.info__item}>
       <HomeIcon className={classes.info__item__icon} />
       <Typography className={classes.info__item__subtitle} component="h5" variant="h5">
        {space}
       </Typography>
      </div>
      <div className={classes.info__item}>
       <HomeIcon className={classes.info__item__icon} />
       <Typography className={classes.info__item__subtitle} component="h5" variant="h5">
        {rooms}
       </Typography>
      </div>

     </div>

     <Typography className={classes.card__price} component="h5" variant="h5">
      {price}
     </Typography>

    </CardContent>
   </div>

  </Card>
 );
}

export default Index;
