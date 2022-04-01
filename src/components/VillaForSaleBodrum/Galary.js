import React from 'react';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import FavReact from './FavReact'

import PhotoSlider from './PhotoSlider'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 link: {
  display: 'flex',
 },
 icon: {
  marginRight: theme.spacing(0.5),
  width: 20,
  height: 20,
 },
 title: {
  color: theme.palette.primary.main,
  paddingBottom: "30px",
  fontWeight: 'bold',
 },
 backBlock: {
  borderRadius: '8px',
  border: '1px solid #c5c5c5',
  background: '#fff',
  marginTop: '20px',
 },
 big__container: {
  position: "relative",
  padding: "15px",
 },
 adRow: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 0',
 },
}));


function Index() {
 const classes = useStyles();

 return (
  <div className={classes.backBlock}>
   <Container
    maxWidth="lg"
    className={classes.big__container}
   >
    <div className={classes.adRow}>

     <Typography
      align='left'
      className={classes.title}
      variant='h5'
     >
      Mugla Bodrum Villa for resale
     </Typography>

     <FavReact react='Add To Favorites'  />

    </div>

    <PhotoSlider />

   </Container>
  </div >
 );
}
export default Index;