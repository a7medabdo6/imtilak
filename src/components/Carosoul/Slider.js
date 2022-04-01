import React from "react";
import Carousel from "react-material-ui-carousel";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { Paper, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  arrow: {
    // position: "absolute",
    backgroundColor: "white",
    background: "#fff",
    width: "30px",
    minWidth: "30px",
    height: "40px",
    top: "50%",
    padding: "0px",
    fontSize: "1.2rem",
    transform: "translate(0,-50%)",
    margin: "-1px",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
}));
function Example(props) {
  const classes = useStyles();

  var items = [
    {
      image:
        "https://www.imtilak.net/uploads/sliders/19545f6325e0831261e69362d1490970le1557.png",
    },
    {
      image:
        "https://www.imtilak.net/uploads/sliders/bf26e3c22f925380dc8848947d99be05FFv988.png",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      indicators={true}
      swipe={true}
      NavButton={({ onClick, className, style, next, prev }) => {
        // Other logic

        return (
          <Button onClick={onClick} className={classes.arrow}>
            {next && <ArrowForwardIosIcon />}
            {prev && <ArrowBackIosIcon />}
          </Button>
        );
      }}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper style={{ height: "370px" }}>
      <Link to="/Citizenship">
        <img height="370px" width="100%" src={props.item.image} alt="Img" />
      </Link>
    </Paper>
  );
}
export default Example;
