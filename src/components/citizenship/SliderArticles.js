import React from "react";
import { Box, Container, Link, Typography } from "@material-ui/core";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import VisibilityIcon from "@material-ui/icons/Visibility";
// Styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  hover: {
    color: "black",
    "&:hover": {},
  },
  paragsmall: {
    position: "absolute",
    bottom: "0px",
    color: "white",

    width: "100%",
    height: "fit-content",
    fontSize: ".9rem",
    padding: ".5rem",
    background: "#000",
    opacity: ".5",
    textAlign: "center",
    margin: "0px",
  },
  boxImagesmall: {
    backgroundImage:
      "url('https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg')",
    backgroundSize: "cover",
    height: "200px",
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
  },
});
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Slider() {
  const classes = useStyles();

  return (
    <div
      style={{
        marginBlock: "50px",
      }}
    >
      <Box
        style={{
          padding: "20px",
          borderRadius: "5px",
          border: "1px solid gray",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          style={{ marginBlock: "10px", paddingBottom: "10px" }}
          color="primary"
        >
          Testimonial Of Imtilak Clients Who Have Obtained Turkish Citizenship
          By Purchasing A Property
        </Typography>
        <div dir="ltr">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carouselArticles"
          >
            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className={classes.boxImagesmall}>
                  <span className={classes.span}>New</span>
                  <Typography className={classes.paragsmall} variant="h2">
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className={classes.hover}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>
          </Carousel>
        </div>
      </Box>
    </div>
  );
}

export default Slider;
