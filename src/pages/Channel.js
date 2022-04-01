import React from "react";
// Local Component
import Playlists from "../components/Channels/Playlists";
import Slider from "../components/Channels/Slider";
import MainVideo from "../components/Channels/MainVideo";
import NeedHelp from "../components/common/NeedHelp";
import CitizenshipBlock from '../components/common/CitizenshipBlock';
// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";
// MUI Component
import Grid from '@material-ui/core/Grid';
// MUI Hooks
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  hover: {
    color: "black",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

function Index(props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:900px)');
  const classes = useStyles();

  return (
    <Grid container spacing={2}>

      {
        isDesktop ?

          <>
            <Grid item xs={3}>
              <NeedHelp />
              <CitizenshipBlock />
            </Grid>
            <Grid item xs={9}>
              <Slider />
              <MainVideo />
              <Playlists />
            </Grid>
          </>
          :
          <>
            <Grid item xs={12}>
              <Slider />
              <MainVideo />
              <Playlists />
              <NeedHelp />
            </Grid>
          </>
      }

    </Grid>
  );
}

export default Index;
