import React from "react";
// MUI Component
import { Box, Button, Container, Typography } from "@material-ui/core";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 backBlock: {
  borderRadius: '8px',
  border: '1px solid #c5c5c5',
  background: '#fff',
  marginTop: '18px',
 },
 upper: {
  display: 'flex',
 },
 text: {
  width: '45%',
  flexGrow: '1',
 },
 title: {
  marginBottom: '15px',
  fontSize: '1.25rem',
  fontWeight: 'lighter',
 },
 content: {
  fontSize: '1rem',
  fontWeight: '700',
 },
 img: {
  width: '90px',
  flexGrow: '1',
  padding: '20px',
 },
 btn: {
  textAlign: 'center',
  backgroundColor: '#25D366',
  color: "white",
  width: '100%',
  fontSize: "18px",
  fontWeight: "bold",
  "&:hover": {
   backgroundColor: 'inherit',
   color: theme.palette.primary.main,
   border: "1px solid #9c344c",
   transition: "all .3s ease",

  },
 },
}));

function Index(props) {
 const classes = useStyles();

 return (
  <div className={classes.backBlock}>

   <Box
    className={classes.upper}

   >
    <Box p={2}
     className={classes.text}
    >
     <Typography
      className={classes.title}
      variant='h5'
     >
      Mesaken Real Estate</Typography>

     <Typography
      className={classes.content}
      variant='h6'
     >
      is the exclusive agent of resale options in real estate ownership</Typography>
    </Box>

    <img
     className={classes.img}
     src='https://www.imtilak.net/assets/img/logo-mesaken.png'
     height='90px'
     
     alt="img" />

   </Box>
   <Button
    variant="contained"
    className={classes.btn}
    onClick=''
   >
    <WhatsAppIcon mr={2} />  Send
   </Button>
  </div >
 );
}

export default Index;