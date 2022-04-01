import React, { useState } from "react";
// MUI Component
import { Box, Container, Typography } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

// Local Component
import PropCard from './PropCard';
// Common Component
import SquareBtn from '../common/SquareBtn'

// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 containerMagin: {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '25px 15px',
 },
 sortBy: {
  fontWeight: '700',
  color: theme.palette.primary.main,
 },
 backBlock: {
  borderRadius: '8px',
  border: '1px solid #c5c5c5',
  background: '#fff',
  marginTop: '20px',
 },
}));

function Index({ btn }) {
 const [foundNO, setFoundNO] = useState(0);
 const classes = useStyles();

 const [page, setPage] = useState(1);
 const handleChange = (event, value) => {
  setPage(value);
 };

 return (
  <div className={classes.backBlock}>
   <Container
    maxWidth="lg"
    style={{
     position: "relative",
     paddingBottom: "25px",
    }}
   >

    {!!btn && btn }

    <Box sx={{
     display: "flex",
     paddingTop: "30px",
     justifyContent: 'space-between',
     alignItems: 'center',
     margin: '0px 10px 10px 0',
     flexWrap: 'wrap',
    }}>

     <Box sx={{
      display: 'flex',
     }}>

      <Typography>Properties Found: {foundNO}</Typography>
     </Box>

     <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
     }}>

      <Typography variant='h6' className={classes.sortBy}>Sort By: </Typography>
      <SquareBtn selected={false} BtnName='Recently Added' />
      <SquareBtn selected={false} BtnName='Price' />
      <SquareBtn selected={false} BtnName='Space' />
     </Box>

    </Box>

    <Box container className={classes.containerMagin}>

     {[...Array(6)].map(el => <PropCard
      key={el}
      date="Mar 2022"
      title="Istanbul Beylikduzu Residence for resale 2 + 1"
      location="Istanbul, Basaksehir"
      space="105 m²" rooms="2 + 1"
      price="540,000 $"
     />)}

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


    </Box>
   </Container>
  </div>
 );
}

export default Index;
