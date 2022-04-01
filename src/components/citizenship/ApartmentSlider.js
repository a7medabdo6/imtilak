import React from "react";
import { Box, Container, Link, Typography } from "@material-ui/core";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
  },
  arrow: {
    filter: "unset",
    zIndex: 555,
    backgroundColor: "white",
    borderRadius: "50%",
  },
  arrowRight: {
    borderRadius: "50%",
    backgroundColor: "#9c344c",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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
function Slider() {
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
          top: "1%",
          left: "50%",
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
    <div
      style={{
        marginBlock: "50px",
      }}
      className="Apartment"
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
          Apartments, Villas, And Shops Conform To Obtaining Turkish Citizenship
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
            customButtonGroup={<ButtonGroup />}
          >
            <div class="turkish-card">
              <div class="card-img">
                <a href="https://www.imtilak.net/en/apartments/ispartakule-towers">
                  <img
                    src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    data-src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    alt="Ebruli Project IMT-83"
                    title="Government Guaranteed Apartments- Ebruli IspartaKule"
                    class="blur-up lazyloaded"
                  />
                </a>
              </div>
              <div class="card-body py-3 py-lg-4">
                <div class="number">IMT-83</div>
                <div class="card-title font-weight-bold">
                  Ebruli Project IMT-83
                </div>
                <div class="prop-location mb-2">
                  <div class="location-contain">
                    <div class="mb-2">
                      <LocationOnIcon
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      <a
                        class="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                      >
                        Istanbul
                      </a>
                      ,{" "}
                      <a
                        class="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul/basaksehir"
                      >
                        Basaksehir
                      </a>
                    </div>
                    <div>
                      <div class="d-inline-block">
                        <HomeIcon
                          style={{
                            fontSize: "15px",
                          }}
                        />

                        <a
                          class="info text-capitalize"
                          href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                        >
                          Apartments
                        </a>
                      </div>
                      <div class="d-inline-block">
                        <i
                          class="fas fa-hand-holding-usd"
                          aria-hidden="true"
                        ></i>
                        <span class="info text-capitalize">Installments</span>
                      </div>
                    </div>
                  </div>
                  <div class="price-contain">
                    <p class="text-muted mb-0">Starting at</p>
                    <p class="price font-weight-bold">
                      <span dir="ltr">
                        <span dir="ltr">355,000 $</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="card-link"
                href="https://www.imtilak.net/en/apartments/ispartakule-towers"
              >
                <i
                  class="fas fa-long-arrow-alt-left mr-3 d-none d-lg-inline-block"
                  aria-hidden="true"
                ></i>
                <span>click here</span>
              </a>
            </div>

            <div class="turkish-card">
              <div class="card-img">
                <a href="https://www.imtilak.net/en/apartments/ispartakule-towers">
                  <img
                    src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    data-src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    alt="Ebruli Project IMT-83"
                    title="Government Guaranteed Apartments- Ebruli IspartaKule"
                    class="blur-up lazyloaded"
                  />
                </a>
              </div>
              <div class="card-body py-3 py-lg-4">
                <div class="number">IMT-83</div>
                <div class="card-title font-weight-bold">
                  Ebruli Project IMT-83
                </div>
                <div class="prop-location mb-2">
                  <div class="location-contain">
                    <div class="mb-2">
                      <LocationOnIcon
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      <a
                        class="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                      >
                        Istanbul
                      </a>
                      ,{" "}
                      <a
                        class="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul/basaksehir"
                      >
                        Basaksehir
                      </a>
                    </div>
                    <div>
                      <div class="d-inline-block">
                        <HomeIcon
                          style={{
                            fontSize: "15px",
                          }}
                        />

                        <a
                          class="info text-capitalize"
                          href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                        >
                          Apartments
                        </a>
                      </div>
                      <div class="d-inline-block">
                        <i
                          class="fas fa-hand-holding-usd"
                          aria-hidden="true"
                        ></i>
                        <span class="info text-capitalize">Installments</span>
                      </div>
                    </div>
                  </div>
                  <div class="price-contain">
                    <p class="text-muted mb-0">Starting at</p>
                    <p class="price font-weight-bold">
                      <span dir="ltr">
                        <span dir="ltr">355,000 $</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="card-link"
                href="https://www.imtilak.net/en/apartments/ispartakule-towers"
              >
                <i
                  class="fas fa-long-arrow-alt-left mr-3 d-none d-lg-inline-block"
                  aria-hidden="true"
                ></i>
                <span>click here</span>
              </a>
            </div>

            <div class="turkish-card">
              <div class="card-img">
                <a href="https://www.imtilak.net/en/apartments/ispartakule-towers">
                  <img
                    src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    data-src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    alt="Ebruli Project IMT-83"
                    title="Government Guaranteed Apartments- Ebruli IspartaKule"
                    class="blur-up lazyloaded"
                  />
                </a>
              </div>
              <div class="card-body py-3 py-lg-4">
                <div class="number">IMT-83</div>
                <div class="card-title font-weight-bold">
                  Ebruli Project IMT-83
                </div>
                <div class="prop-location mb-2">
                  <div class="location-contain">
                    <div class="mb-2">
                      <LocationOnIcon
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      <a
                        class="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                      >
                        Istanbul
                      </a>
                      ,{" "}
                      <a
                        class="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul/basaksehir"
                      >
                        Basaksehir
                      </a>
                    </div>
                    <div>
                      <div class="d-inline-block">
                        <HomeIcon
                          style={{
                            fontSize: "15px",
                          }}
                        />

                        <a
                          class="info text-capitalize"
                          href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                        >
                          Apartments
                        </a>
                      </div>
                      <div class="d-inline-block">
                        <i
                          class="fas fa-hand-holding-usd"
                          aria-hidden="true"
                        ></i>
                        <span class="info text-capitalize">Installments</span>
                      </div>
                    </div>
                  </div>
                  <div class="price-contain">
                    <p class="text-muted mb-0">Starting at</p>
                    <p class="price font-weight-bold">
                      <span dir="ltr">
                        <span dir="ltr">355,000 $</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="card-link"
                href="https://www.imtilak.net/en/apartments/ispartakule-towers"
              >
                <i
                  class="fas fa-long-arrow-alt-left mr-3 d-none d-lg-inline-block"
                  aria-hidden="true"
                ></i>
                <span>click here</span>
              </a>
            </div>
          </Carousel>
        </div>
      </Box>
    </div>
  );
}

export default Slider;
