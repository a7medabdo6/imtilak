import React from "react";
// MUI Component
import {
  Box,
  Container,
  Link,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// Icons
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
// Styles
import "react-multi-carousel/lib/styles.css";
import "../OwnershipTurkey/projectIndex.css";
// Functions
import { makeStyles, alpha } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  project: {
    height: "550px",
  },
  root: {
    width: "360px",
    height: "500px",
  },
  rootLast: {
    marginLeft: "10px",
    width: "0",
    height: "0",
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
    color: theme.palette.primary.main,

    paddingInline: "10px",
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
  btn: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "100%",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    "&:hover": {
      backgroundColor: "inherit",
      color: theme.palette.primary.main,
      border: "1px solid #9c344c",
      transition: "all .3s ease",
    },
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 8,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1249, min: 900 },
    items: 8,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 899, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
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
            onClick={() => next()}
          />
        </div>
        <div
          className={classes.arrowRight}
          style={{ right: "100px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={classes.arrow}
            style={{ transform: " rotateZ( -180deg)" }}
            onClick={() => previous()}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="project stories">
      <Container
        maxWidth="lg"
        style={{ position: "relative", padding: "10px 0px" }}
      >
        <Box
          style={{
            paddingTop: "20px",
          }}
        >
          <Typography className={classes.Header} variant="h4">
            Stories{" "}
          </Typography>
        </Box>
        <div dir="ltr">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={false}
            // autoPlay={props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1500}
            autoPlay={false}
            keyBoardControl={true}
            transitionDuration={0}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px project-slider"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            //renderButtonGroupOutside={true}
          >
            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>

            <a
              href="https://www.imtilak.net/amp/story/apartments-for-sale-in-turkey"
              class="item d-block text-center"
              target="_blank"
              rel="noreferrer"
              style={{ textAlign: "center" }}
            >
              <div class="circle">
                <img
                  data-src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                  alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                  class="owl-lazy"
                  src="https://www.imtilak.net/crop/90/90/amp_stories/eb69a41aac4da201a91378dc838ec896Rpy753.jpg"
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  dir="ltr"
                >
                  <circle cx="50" cy="50" r="40"></circle>
                </svg>
              </div>
              <span class="name text-center">
                {" "}
                أفضل مشاريع أنطاليا - تملك واستثمار
              </span>
            </a>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

export default Index;
