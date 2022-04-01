import React from 'react'
// common Component 
import TitleContainer from '../common/TitleContainer'
// Local Components
import ItemList from "./ItemsList";
import FiltersList from "./FiltersList";
import FiltersMobilePopup from "./FiltersMobilePopup";
// MUI Components
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// MUI Hooks
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Index() {
 const theme = useTheme();
 const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

 return (
  <div>
   {
    isDesktop ?

     <>
      <Grid
       container
       rowSpacing={5}
       columnSpacing={{ xs: 1, sm: 2, md: 3 }}
       spacing={2}
      >

       <Grid item xs={4}>
        <FiltersList />
       </Grid>

       <Grid item xs={8}>
        <TitleContainer
         searched="Turkey"
        />
        <ItemList />
       </Grid>

      </Grid>
     </>
     :
     <>
      <Grid item xs={12}>
       <TitleContainer
        searched="Turkey"
       />

       <ItemList btn={<FiltersMobilePopup />} />
      </Grid>
     </>
   }


  </div>
 )
}

export default Index