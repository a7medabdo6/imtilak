import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import { Container } from '@material-ui/core';

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
  paddingTop: "30px",
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
 content: {

 }
}));

function handleClick(event) {
 event.preventDefault();
 console.info('You clicked a breadcrumb.');
}

function Index() {
 const classes = useStyles();

 return (
  <div className={classes.backBlock}>
   <Container
    maxWidth="lg"
    className={classes.big__container}
   >


    <Breadcrumbs className={classes.content} aria-label="breadcrumb">





     <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
      <HomeIcon className={classes.icon} />
      Home Page
     </Link>

     <Link
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
      className={classes.link}
     >
      Villa For Sale
     </Link>

     <Link
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
      className={classes.link}
     >

      Villa For Sale Mugla
     </Link>

     <Typography color="textPrimary" className={classes.link}>
      Villa For Sale Bodrum
     </Typography>


    </Breadcrumbs>


   </Container>
  </div >
 );
}
export default Index;