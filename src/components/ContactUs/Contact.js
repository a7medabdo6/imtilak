import React from "react";
// MUI Component
import { Box, Container, Typography, Grid } from "@material-ui/core";

import Divider from '@material-ui/core/Divider';
// Local Component
import InfoCard from './InfoCard';
// Styles
import { makeStyles } from "@material-ui/core/styles";
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
  contact__item__icon: {

    paddingRight: '15px',

  },
  avatar: {
    // padding: "5px 16px",
    padding: "5px",
    backgroundColor: "white",
    border: "1px solid gray",
  },
  Header: {
    color: theme.palette.primary.main,
  },
  hover: {
    color: "black",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },

}));

function Index(props) {
  const classes = useStyles();

  return (
    <div className="testimonial">
      <Container
        maxWidth="lg"
        style={{
          position: "relative",
          paddingBottom: "25px",
        }}
      >
        <Box style={{ paddingTop: "30px" }}>

          <Typography className={classes.Header} variant="h4">
            {" "}Contact Us{" "}</Typography>
          <Typography
            style={{
              marginInline: "0px",
              marginBlock: "10px",
              width: "80%"
            }}
          >
            <Typography>
              {" "}Please visit the nearest branch{" "}
            </Typography>
          </Typography>
          <Divider />
        </Box>

        <Typography variant='h6' className={classes.contact__subtitle}>Imtilak Real Estate Offices</Typography>

        <Grid container className={classes.containerMagin} >
          <Grid container item xs={12} spacing={3}>
            {[...Array(6)].map(el => <InfoCard key={el} />)}
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default Index;
