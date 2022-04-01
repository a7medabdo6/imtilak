import { Box, Container, Link, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";

import Newsletter from "./Newsletter";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "155px",
    margin: "auto",
  },
  arrowRight: {
    borderRadius: "50%",
    backgroundColor: "#37404d",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  know: {
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "30px",

    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    alignItems: "center",
  },
  arrow: {
    filter: "unset",
    zIndex: 555,
    backgroundColor: "white",
    borderRadius: "50%",
  },
  Header: {
    color: "white",
  },
  knowMore: {
    backgroundColor: "white",
    padding: "5px 10px",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 6, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};
function Index(props) {
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group"
        style={{
          position: "absolute",
          top: "20px",
          right: `${i18n.language == "ar" ? "86%" : "20px"}`,
        }}
      >
        {" "}
        <div
          className={classes.arrowRight}
          style={{ right: "20px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={(currentSlide === 0 ? "disable" : "", classes.arrow)}
            style={{ transform: " rotateZ( 360deg)" }}
            onClick={() => previous()}
          />
        </div>
        <div
          className={classes.arrowRight}
          style={{ right: "100px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={classes.arrow}
            style={{ transform: " rotateZ( -180deg)" }}
            onClick={() => next()}
          />
        </div>
      </div>
    );
  };
  return (
    <section>
      <Newsletter />

      <Tabs />

      <Container maxWidth="lg" style={{ position: "relative" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Typography className={classes.Header} variant="h3">
            {" "}
            Imtilak Group
          </Typography>
          <Typography className={classes.know} style={{ marginInline: "20px" }}>
            <Typography className={classes.knowMore}>Know Us More</Typography>
          </Typography>
        </Box>
        <div dir="ltr">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={800}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px "
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            //renderButtonGroupOutside={true}
          >
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/ilajak.svg?v=1607602893" />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img
                  src="https://www.imtilak.net/assets/img/companies-logo/tebadul.svg?v=1607602893
"
                />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/safaraq.svg?v=1607602893" />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/imt.svg?v=1607602893" />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/mimari.svg?v=1607602893" />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/mimari.svg?v=1607602893" />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/mimari.svg?v=1607602893" />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/mimari.svg?v=1607602893" />
              </div>
            </Box>
            <Box className={classes.card}>
              <div className="innercard">
                <img src="https://www.imtilak.net/assets/img/companies-logo/mimari.svg?v=1607602893" />
              </div>
            </Box>
          </Carousel>
        </div>
      </Container>

      <div className="copyrights text-center p-3 color-white">
        All Rights Reserved for Imtilak Group - Imtilak Real Estate © 2022 |{" "}
        <a className="mr-2 text-capitalize">Privacy Policy</a> -
        <a className="ml-2 text-capitalize">Terms of Use</a>
      </div>
    </section>
  );
}

export default Index;
