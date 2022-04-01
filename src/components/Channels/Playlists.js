import React from "react";
// MUI Component
import {  Grid } from "@material-ui/core";
// Local Component
import PlaylistCard from './PlaylistCard';
// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  containerMagin: {
    padding: '25px 15px',
    display: 'flex',
    justifyContent: 'center'
  },
  contact__subtitle: {
    margin: "15px 0px",
    color: theme.palette.primary.main,
  },
  contact__item: {
    display: "flex",
    marginTop: "20px",
    alignContent: 'center',
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
    paddingBottom: "25px",
   }
}));

function Index(props) {
  const classes = useStyles();

  return (
    <div className={classes.backBlock}>
      <Grid container className={classes.containerMagin} >
        <Grid container item xs={12} spacing={3}>
          {[...Array(4)].map(el => <PlaylistCard key={el} />)}
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;
