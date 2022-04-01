import React from "react";
// MUI Component
import { Box, Container,  Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({

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
    <section className="testimonial">
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px" }}
      >
        <Box
          style={{
            paddingTop: "30px",
          }}
        >
          <Typography className={classes.Header} variant="h4">
            {" "}Office Locations On The Map
            {" "}
          </Typography>
          <Typography
            style={{ marginInline: "0px", marginBlock: "10px", width: "80%" }}
          >
            <Typography>
              {" "}Please visit the nearest branch{" "}
            </Typography>
          </Typography>
          <Divider />
        </Box>

        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55275.150648782386!2d31.15462371399995!3d30.016857984341783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2sGiza%2C%20El%20Omraniya%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1646255309538!5m2!1sen!2seg"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          />
        </Box>


      </Container>
    </section>
  );
}

export default Index;
