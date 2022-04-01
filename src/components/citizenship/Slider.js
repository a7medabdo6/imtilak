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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
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
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Carousel>
        </div>
      </Box>
    </div>
  );
}

export default Slider;
