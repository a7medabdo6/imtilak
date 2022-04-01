import React from "react";
// Local Component
import ContactUs from './Contact';
import MapLocation from './MapLocation';
import NeedHelp from '../common/NeedHelp';
import CitizenshipBlock from '../common/CitizenshipBlock';
// MUI Component
import Grid from '@material-ui/core/Grid';
// MUI Hooks
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Index(props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (<Grid container spacing={2}>
    {
      isDesktop ?

        <>
          <Grid item xs={3}>
            <NeedHelp />
            <CitizenshipBlock />
          </Grid>
          <Grid item xs={9}>
            <ContactUs />
            <MapLocation />
          </Grid>
        </>
        :
        <>
          <Grid item xs={12}>
            <ContactUs />
            <MapLocation />
            <NeedHelp />
          </Grid>
        </>
    }

  </Grid>);
}

export default Index;
