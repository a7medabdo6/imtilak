import React from 'react'
// MUI Components 
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// Local Components
import Breadcrumbs from './Breadcrumbs'
import Galary from './Galary'
import AdVieWhatsApp from './AdVieWhatsApp'
import AdInfo from './AdInfo'
import AdditionalFeatures from './AdditionalFeatures'
import RegionReport from './RegionReport'
// Common Components
// MUI Hooks
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Index() {
 const theme = useTheme();
 const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

 return (
  <div>
   <Box sx={{ width: '100%' }}>
    <Grid
     container
     rowSpacing={5}
     columnSpacing={{ xs: 1, sm: 2, md: 3 }}
     spacing={2}
    >

     {
      isDesktop ?

       <>
        <Grid item xs={8}>
         <Breadcrumbs />
         <Galary />
         <AdditionalFeatures />
         <RegionReport />
        </Grid>
        <Grid item xs={4}>
         <AdVieWhatsApp />
         <AdInfo />
        </Grid>
       </>
       :
       <>
        <Grid item xs={12}>
         <Breadcrumbs />
         <Galary />
         <AdVieWhatsApp />
         <AdInfo />
         <AdditionalFeatures />
         <RegionReport />

        </Grid>
       </>
     }

    </Grid>
   </Box>
  </div >
 )
}

export default Index