import React from "react";
// MUI Component
import { Container } from "@material-ui/core";

// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({

  boxImage: {
    backgroundImage:
      "url('https://www.imtilak.net/assets/img/channel.jpg')",
    backgroundSize: "cover",
    height: "270px",
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
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
    <section className={classes.backBlock}>
      <Container
        className={classes.boxImage}
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px" }}
      >
      </Container>
    </section>
  );
}

export default Index;
