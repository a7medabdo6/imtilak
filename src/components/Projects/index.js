import React from "react";
// MUI Component
import { Box, Container, Typography, Grid, Button } from "@material-ui/core";
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
import { Link } from "react-router-dom";

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
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1249, min: 900 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 899, min: 0 },
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
    <section className={"project"}>
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <Box
          style={{
            paddingTop: "20px",
          }}
        >
          <Typography className={classes.Header} variant="h4">
            Featured Projects
          </Typography>
          <Typography
            style={{ marginInline: "0px", marginBlock: "10px", width: "80%" }}
          >
            <Typography>
              See The Best Real Estate For Sale In Turkey At Cheap Prices And
              Suitable For Real Estate Investment In The Best Real Estate
              Projects And The Most Important Investment Areas
            </Typography>
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
            <Link to="/galaxy-tower">
              <Card className={classes.root}>
                <CardActionArea className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://www.imtilak.net/image/400/210/projects/c189a0f65a306007461e3492f65850656.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="h2">
                      Belven Project IMT - 117
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem
                      </Typography>
                      <HomeIcon />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem lorem
                      </Typography>
                    </Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography component="h4">Starting At</Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="h4"
                      color="primary"
                      component="h2"
                    >
                      1999.99${" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/galaxy-tower">
              <Card className={classes.root}>
                <CardActionArea className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://www.imtilak.net/image/400/210/projects/685a7c592f87f32277fe0ed09e82bc3613.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="h2">
                      Belven Project IMT - 117
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem
                      </Typography>
                      <HomeIcon />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem lorem
                      </Typography>
                    </Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography component="h4">Starting At</Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="h4"
                      color="primary"
                      component="h2"
                    >
                      1999.99${" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/galaxy-tower">
              <Card className={classes.root}>
                <CardActionArea className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://www.imtilak.net/image/400/210/projects/d8a99a0dd9dc563c62314d220159958d8.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="h2">
                      Belven Project IMT - 117
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem
                      </Typography>
                      <HomeIcon />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem lorem
                      </Typography>
                    </Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography component="h4">Starting At</Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="h4"
                      color="primary"
                      component="h2"
                    >
                      1999.99${" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/galaxy-tower">
              <Card className={classes.root}>
                <CardActionArea className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://www.imtilak.net/image/400/210/projects/bf457a081b6aa6e062398f6518dbbccbmZD595.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="h2">
                      Belven Project IMT - 117
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem
                      </Typography>
                      <HomeIcon />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem lorem
                      </Typography>
                    </Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography component="h4">Starting At</Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="h4"
                      color="primary"
                      component="h2"
                    >
                      1999.99${" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/galaxy-tower">
              <Card className={classes.root}>
                <CardActionArea className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://www.imtilak.net/image/400/210/projects/c189a0f65a306007461e3492f65850656.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="h2">
                      Belven Project IMT - 117
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem
                      </Typography>
                      <HomeIcon />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem lorem
                      </Typography>
                    </Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography component="h4">Starting At</Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="h4"
                      color="primary"
                      component="h2"
                    >
                      1999.99${" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/galaxy-tower">
              <Card className={classes.root}>
                <CardActionArea className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://www.imtilak.net/image/400/210/projects/685a7c592f87f32277fe0ed09e82bc3613.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="h2">
                      Belven Project IMT - 117
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem
                      </Typography>
                      <HomeIcon />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem lorem
                      </Typography>
                    </Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography component="h4">Starting At</Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="h4"
                      color="primary"
                      component="h2"
                    >
                      1999.99${" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/galaxy-tower">
              <Card className={classes.root}>
                <CardActionArea className={classes.root}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://www.imtilak.net/image/400/210/projects/d8a99a0dd9dc563c62314d220159958d8.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="h2">
                      Belven Project IMT - 117
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem
                      </Typography>
                      <HomeIcon />
                      <Typography
                        style={{ marginInline: "5px" }}
                        color="primary"
                      >
                        lorem lorem lorem
                      </Typography>
                    </Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Day After Day And Thanks To Our Competent And Friendly
                      Staff, The Testimonials Of Our Dear Clients Increase And
                      Reflect The Exceptional Services Provided By Our Company,
                    </Typography>
                    <Typography component="h4">Starting At</Typography>
                    <Typography
                      style={{ marginBlock: "20px" }}
                      variant="h4"
                      color="primary"
                      component="h2"
                    >
                      1999.99${" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            {/* Fix both */}
            {/* <Card className={classes.rootLast}>
        </Card> */}
          </Carousel>
        </div>
        <Link to="/galaxy-tower">
          <Button variant="contained" className={classes.btn} onClick="">
            View all featured projects
          </Button>
        </Link>
      </Container>
    </section>
  );
}

export default Index;
