import React, { useState } from "react";
// MUI Component
import { Box, Container, Divider, Typography, Grid } from "@material-ui/core";
// Local Component
import NewsCard from './NewsCard'
// Styles
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

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
 },
 containerMagin: {
  padding: '25px 15px',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
 },
}));

function Index(props) {
 const classes = useStyles();
 const [page, setPage] = useState(1);
 const handleChange = (event, value) => {
  setPage(value);
 };

 return (
  <div className={classes.backBlock}>
   <Container
    maxWidth="lg"
    className={classes.big__container}
   >

    <Box>
     <Typography
      className={classes.title}
      variant="h4"
      align="left"
     >
      Investment & Real Estate Onwnership in Turkey
     </Typography>
     <Divider />
    </Box>


    <Grid container className={classes.containerMagin} >
     <Grid container item xs={12} spacing={2}>
      {[...Array(6)].map(el => <NewsCard key={el} />)}
     </Grid>
    </Grid>

    <Box sx={{
     display: "flex",
     alignItems: 'center',
     justifyContent: 'center',
    }}>
     <Pagination
      count={10}
      color="primary"
      page={page}
      onChange={handleChange}
     />
    </Box>

   </Container>
  </div >
 );
}

export default Index;