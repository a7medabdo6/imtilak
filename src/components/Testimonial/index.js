import { Box, Container, Link, Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingBlock: "20px",
    backgroundColor: "#9c344c",
    color: "white",
    textAlign: "center",
    position: "absolute",
    left: "0px",
    bottom: "0px",
    right: "0px",
    "&:hover": {
      backgroundColor: "#eee",
      color: "#9c344c",
    },
  },
  media: {
    height: 0,
    // paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  testimonial: {
    height: "550px",
  },
  root: {
    // width: "300px",
    height: "310px",
    backgroundColor: "#eee",
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
  },
  subColor: {
    color: theme.palette.primary.main,
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
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
    <section className="testimonial">
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <Box
          style={{
            paddingTop: "20px",
          }}
        >
          <Typography className={classes.Header} variant="h4">
            {" "}
            testimonials page
          </Typography>
          <Typography
            style={{ marginInline: "0px", marginBlock: "10px", width: "80%" }}
          >
            <Typography>
              {" "}
              Day After Day And Thanks To Our Competent And Friendly Staff, The
              Testimonials Of Our Dear Clients Increase And Reflect The
              Exceptional Services Provided By Our Company, Including The Before
              And After-Sales Services. These Testimonials Are A Source Of Pride
              And Honor For Us.
            </Typography>
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
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px testimonial-slider"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            <div>
              <Card
                className={classes.root}
                style={{ padding: "0px !important", marginInline: "8px" }}
              >
                <CardActionArea
                  className={classes.root}
                  style={{ padding: "0px !important" }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src="https://www.imtilak.net/image/45/45/testimonials/77c190c49a58e89622784240c34d94ce28X598.png" />
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={
                      <Typography className={classes.subColor}>
                        Person role 1
                      </Typography>
                    }
                  />
                  <CardContent
                    className=""
                    style={{ padding: "0px !important" }}
                  >
                    <Typography
                      style={{ marginTop: "0px", marginBottom: "100px" }}
                      variant="body2"
                      color=""
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography
                      style={{}}
                      variant="p"
                      component="h2"
                      className={classes.card}
                    >
                      Watch The Video
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card
                className={classes.root}
                style={{ padding: "0px !important", marginInline: "8px" }}
              >
                <CardActionArea
                  className={classes.root}
                  style={{ padding: "0px !important" }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src="https://www.imtilak.net/image/45/45/testimonials/77c190c49a58e89622784240c34d94ce28X598.png" />
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={
                      <Typography className={classes.subColor}>
                        Person role 2
                      </Typography>
                    }
                  />
                  <CardContent
                    className=""
                    style={{ padding: "0px !important" }}
                  >
                    <Typography
                      style={{ marginTop: "0px", marginBottom: "100px" }}
                      variant="body2"
                      color=""
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography
                      style={{}}
                      variant="p"
                      component="h2"
                      className={classes.card}
                    >
                      Watch The Video
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card
                className={classes.root}
                style={{ padding: "0px !important", marginInline: "8px" }}
              >
                <CardActionArea
                  className={classes.root}
                  style={{ padding: "0px !important" }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src="https://www.imtilak.net/image/45/45/testimonials/77c190c49a58e89622784240c34d94ce28X598.png" />
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={
                      <Typography className={classes.subColor}>
                        Person role 3
                      </Typography>
                    }
                  />
                  <CardContent
                    className=""
                    style={{ padding: "0px !important" }}
                  >
                    <Typography
                      style={{ marginTop: "0px", marginBottom: "100px" }}
                      variant="body2"
                      color=""
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography
                      style={{}}
                      variant="p"
                      component="h2"
                      className={classes.card}
                    >
                      Watch The Video
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card
                className={classes.root}
                style={{ padding: "0px !important", marginInline: "8px" }}
              >
                <CardActionArea
                  className={classes.root}
                  style={{ padding: "0px !important" }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src="https://www.imtilak.net/image/45/45/testimonials/77c190c49a58e89622784240c34d94ce28X598.png" />
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={
                      <Typography className={classes.subColor}>
                        Person role 4
                      </Typography>
                    }
                  />
                  <CardContent
                    className=""
                    style={{ padding: "0px !important" }}
                  >
                    <Typography
                      style={{ marginTop: "0px", marginBottom: "100px" }}
                      variant="body2"
                      color=""
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography
                      style={{}}
                      variant="p"
                      component="h2"
                      className={classes.card}
                    >
                      Watch The Video
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card
                className={classes.root}
                style={{ padding: "0px !important", marginInline: "8px" }}
              >
                <CardActionArea
                  className={classes.root}
                  style={{ padding: "0px !important" }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src="https://www.imtilak.net/image/45/45/testimonials/77c190c49a58e89622784240c34d94ce28X598.png" />
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={
                      <Typography className={classes.subColor}>
                        Person role 5
                      </Typography>
                    }
                  />
                  <CardContent
                    className=""
                    style={{ padding: "0px !important" }}
                  >
                    <Typography
                      style={{ marginTop: "0px", marginBottom: "100px" }}
                      variant="body2"
                      color=""
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography
                      style={{}}
                      variant="p"
                      component="h2"
                      className={classes.card}
                    >
                      Watch The Video
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card
                className={classes.root}
                style={{ padding: "0px !important", marginInline: "8px" }}
              >
                <CardActionArea
                  className={classes.root}
                  style={{ padding: "0px !important" }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src="https://www.imtilak.net/image/45/45/testimonials/77c190c49a58e89622784240c34d94ce28X598.png" />
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={
                      <Typography className={classes.subColor}>
                        Person role 6
                      </Typography>
                    }
                  />
                  <CardContent
                    className=""
                    style={{ padding: "0px !important" }}
                  >
                    <Typography
                      style={{ marginTop: "0px", marginBottom: "100px" }}
                      variant="body2"
                      color=""
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography
                      style={{}}
                      variant="p"
                      component="h2"
                      className={classes.card}
                    >
                      Watch The Video
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

export default Index;
