import React from "react";
// MUI Component
import { Box, Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 title: {
  color: theme.palette.primary.main,
  paddingTop: "30px",
  fontWeight: 'lighter',
 },
 backBlock: {
  borderRadius: '8px',
  border: '1px solid #c5c5c5',
  background: '#fff',
  marginTop: '20px',
 },
 big__container: {
  position: "relative",
  paddingBottom: "25px",
 },
 btn: {
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: "white",
  width: '100%',
  fontSize: "18px",
  fontWeight: "lighter",
  "&:hover": {
   backgroundColor: 'inherit',
   color: theme.palette.primary.main,
   border: "1px solid #9c344c",
   transition: "all .3s ease",
  },
 },
 imgRes: {
  maxWidth: '280px',
width:"50vw"
 }

}));

function Index(props) {
 const classes = useStyles();

 return (
  <div className={classes.backBlock}>
   <Container
    maxWidth="lg"
    className={classes.big__container}
   >


    <Typography
     className={classes.title}
     variant="h3"
     align="center"
    >

     All You Need To Know About Obtaining Citizenship Through Buying A Property.


    </Typography>
    <Box align='center' p={4}>
     <img className={classes.imgRes} src="https://www.imtilak.net/assets/img/turkish-passport.png" alt="" />
    </Box>
    <Button
     variant="contained"
     className={classes.btn}
     onClick=''
    >
     For More Details
    </Button>
   </Container>
  </div >
 );
}

export default Index;