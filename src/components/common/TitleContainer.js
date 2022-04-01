import React from "react";
// MUI Component
import { Box, Container, Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  paddingBottom: "25px",
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
     variant="h5"
     align="center"
    >
     <Box sx={{
     }}>
      Property For Resale In {props.searched}
     </Box>

    </Typography>

   </Container>
  </div >
 );
}

export default Index;
