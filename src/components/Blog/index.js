import React from "react";
// MUI Component
import { Box, Container, Typography, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// MUI Hooks
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import VisibilityIcon from "@material-ui/icons/Visibility";
// Styles
import "react-multi-carousel/lib/styles.css";
// Functions
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxImage: {
    backgroundImage:
      "url('https://www.imtilak.net/uploads/news/25302fcdf2218e724a24e482d796ed2c5Qe295.jpg')",
    backgroundSize: "cover",
    height: "630px",
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
  },
  boxImagesmall: {
    backgroundImage:
      "url('https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg')",
    backgroundSize: "cover",
    height: "150px",
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
  },
  parag: {
    position: "absolute",
    bottom: "41px",
    lineHeight: "40px",
    left: "10%",
    color: "white",
    width: "80%",
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
  span: {
    background: "#9c344c",
    padding: "8px",
    color: "white",
    display: "inline-block",
  },
  testimonial: {
    height: "550px",
  },
  root: {
    // width: "300px",
    height: "310px",
    backgroundColor: "#eee",
  },
  rootHor: {
    display: "flex",
    backgroundColor: "#eee",
    margin: "0px 0px 10px 0px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: "0px",
  },
  cover: {
    width: "151px",
    minWidth: "150px",
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
  hover: {
    color: "black",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  icons: {
    fontSize: "1.1rem;",
  },
}));

function Index() {
  const isDesktop = useMediaQuery("(min-width:1125px)");
  const classes = useStyles();

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
            Imtilak Blog
          </Typography>
          <Typography
            style={{ marginInline: "0px", marginBlock: "10px", width: "80%" }}
          >
            <Typography>
              {" "}
              Interesting articles and news: documented information about the
              real estate market and daily life in Turkey, interesting topics
              for the real estate investor, provided to you by Imtilak Real
              Estate
            </Typography>
          </Typography>
        </Box>

        <Grid
          Container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isDesktop ? (
            <Grid
              Container
              style={{
                display: "flex",
              }}
            >
              {/* Left */}
              <Grid item xs={4} md={4}>
                <Link to="/has-real-estate">
                  <Card variant="outlined" style={{ borderRadius: "10px" }}>
                    <Box className={classes.boxImage}>
                      <span className={classes.span}>New</span>
                      <Typography className={classes.parag} variant="h2">
                        An increase of 81% | The highest direct investment flow
                        in Turkey in five years
                      </Typography>
                    </Box>
                  </Card>
                </Link>
              </Grid>

              {/* Right */}
              <Grid
                item
                xs={8}
                md={8}
                style={{ display: "flex", flexDirection: "row" }}
              >
                {/* Right - Left */}
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    margin: "0px 0px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "space-between",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                      margin: "0px 10px 0px 10px",
                    }}
                  >
                    <Link to="/has-real-estate">
                      <Card variant="outlined" style={{ borderRadius: "10px" }}>
                        <Box className={classes.boxImagesmall}>
                          <span className={classes.span}>New</span>
                          <Typography
                            className={classes.paragsmall}
                            variant="h2"
                          >
                            An increase of
                          </Typography>
                        </Box>
                        <Box style={{ backgroundColor: "#eee" }}>
                          <Typography
                            style={{
                              width: "100%",
                              fontSize: ".9rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className={classes.hover}
                          >
                            Apartments For Sale In The Luxurious NISHANTASHI |
                            Carlton Project In Istanbul
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: ".8rem",
                              fontWeight: "bold",
                            }}
                          >
                            Apartments For Sale In The Luxurious NISHANTASHI |
                            Carlton Project In Istanbul
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "5px",
                            }}
                          >
                            <Typography
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <EventAvailableIcon size="small" />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <VisibilityIcon size="small" />
                              548
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Link>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{ margin: "0px 10px 20px 10px" }}
                  >
                    <Link to="/has-real-estate">
                      <Card variant="outlined" style={{ borderRadius: "10px" }}>
                        <Box className={classes.boxImagesmall}>
                          <span className={classes.span}>New</span>
                          <Typography
                            className={classes.paragsmall}
                            variant="h2"
                          >
                            An increase of
                          </Typography>
                        </Box>
                        <Box style={{ backgroundColor: "#eee" }}>
                          <Typography
                            style={{
                              width: "100%",
                              fontSize: ".9rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className={classes.hover}
                          >
                            Apartments For Sale In The Luxurious NISHANTASHI |
                            Carlton Project In Istanbul
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: ".8rem",
                              fontWeight: "bold",
                            }}
                          >
                            Apartments For Sale In The Luxurious NISHANTASHI |
                            Carlton Project In Istanbul
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "5px",
                            }}
                          >
                            <Typography
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <EventAvailableIcon
                                size="small"
                                className={classes.icons}
                              />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <VisibilityIcon
                                size="small"
                                className={classes.icons}
                              />
                              548
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Link>
                  </Grid>
                </Grid>

                {/* Right - Right */}
                <Grid item xs={6} md={6} tyle={{ margin: "0px 0px" }}>
                  <Grid item xs={12} md={12} tyle={{}}>
                    <Link to="/has-real-estate">
                      <Card className={classes.rootHor}>
                        <CardMedia
                          className={classes.cover}
                          image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                          title="Live from space album cover"
                        />
                        <div className={classes.details}>
                          <CardContent
                            className={classes.content}
                            style={{ paddingBottom: "0px" }}
                          >
                            <Typography
                              component="p"
                              variant="p"
                              style={{ marginBottom: "42px", fontSize: "12px" }}
                            >
                              Live From Space Live From Space Live From Space
                            </Typography>

                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "5px",
                              }}
                            >
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <EventAvailableIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                2022-02-22
                              </Typography>
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <VisibilityIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                548
                              </Typography>
                            </Box>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={12} tyle={{}}>
                    <Link to="/has-real-estate">
                      <Card className={classes.rootHor}>
                        <CardMedia
                          className={classes.cover}
                          image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                          title="Live from space album cover"
                        />
                        <div className={classes.details}>
                          <CardContent
                            className={classes.content}
                            style={{ paddingBottom: "0px" }}
                          >
                            <Typography
                              component="p"
                              variant="p"
                              style={{ marginBottom: "42px", fontSize: "12px" }}
                            >
                              Live From Space Live From Space Live From Space
                            </Typography>

                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "5px",
                              }}
                            >
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <EventAvailableIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                2022-02-22
                              </Typography>
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <VisibilityIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                548
                              </Typography>
                            </Box>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  </Grid>{" "}
                  <Grid item xs={12} md={12} tyle={{}}>
                    <Link to="/has-real-estate">
                      <Card className={classes.rootHor}>
                        <CardMedia
                          className={classes.cover}
                          image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                          title="Live from space album cover"
                        />
                        <div className={classes.details}>
                          <CardContent
                            className={classes.content}
                            style={{ paddingBottom: "0px" }}
                          >
                            <Typography
                              component="p"
                              variant="p"
                              style={{ marginBottom: "42px", fontSize: "12px" }}
                            >
                              Live From Space Live From Space Live From Space
                            </Typography>

                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "5px",
                              }}
                            >
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <EventAvailableIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                2022-02-22
                              </Typography>
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <VisibilityIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                548
                              </Typography>
                            </Box>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  </Grid>{" "}
                  <Grid item xs={12} md={12} tyle={{}}>
                    <Link to="/has-real-estate">
                      <Card className={classes.rootHor}>
                        <CardMedia
                          className={classes.cover}
                          image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                          title="Live from space album cover"
                        />
                        <div className={classes.details}>
                          <CardContent
                            className={classes.content}
                            style={{ paddingBottom: "0px" }}
                          >
                            <Typography
                              component="p"
                              variant="p"
                              style={{ marginBottom: "42px", fontSize: "12px" }}
                            >
                              Live From Space Live From Space Live From Space
                            </Typography>

                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "5px",
                              }}
                            >
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <EventAvailableIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                2022-02-22
                              </Typography>
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <VisibilityIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                548
                              </Typography>
                            </Box>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  </Grid>{" "}
                  <Grid item xs={12} md={12} tyle={{}}>
                    <Link to="/has-real-estate">
                      <Card className={classes.rootHor}>
                        <CardMedia
                          className={classes.cover}
                          image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                          title="Live from space album cover"
                        />
                        <div className={classes.details}>
                          <CardContent
                            className={classes.content}
                            style={{ paddingBottom: "0px" }}
                          >
                            <Typography
                              component="p"
                              variant="p"
                              style={{ marginBottom: "42px", fontSize: "12px" }}
                            >
                              Live From Space Live From Space Live From Space
                            </Typography>

                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "5px",
                              }}
                            >
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <EventAvailableIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                2022-02-22
                              </Typography>
                              <Typography
                                style={{ display: "flex", fontSize: "14px" }}
                              >
                                <VisibilityIcon
                                  size="small"
                                  className={classes.icons}
                                />
                                548
                              </Typography>
                            </Box>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              {/* Left */}
              <Grid
                item
                xs={12}
                style={{
                  margin: "0 0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link to="/has-real-estate">
                  <Card variant="outlined" style={{ borderRadius: "10px" }}>
                    <Box className={classes.boxImage}>
                      <span className={classes.span}>New</span>
                      <Typography className={classes.parag} variant="h2">
                        An increase of 81% | The highest direct investment flow
                        in Turkey in five years
                      </Typography>
                    </Box>
                  </Card>
                </Link>
              </Grid>

              {/* Right */}
              {/* Right - Left */}
              <Grid
                item
                xs={12}
                style={{
                  madgin: "0px -30px",
                  display: "flex",
                  rowGap: "20px",
                  flexDirection: "column",
                }}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    margin: "0px 10px 0px 10px",
                  }}
                >
                  <Card variant="outlined" style={{ borderRadius: "10px" }}>
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
                          padding: "5px",
                        }}
                        className={classes.hover}
                      >
                        Apartments For Sale In The Luxurious NISHANTASHI |
                        Carlton Project In Istanbul
                      </Typography>
                      <Typography
                        style={{
                          margin: "10px 10px 20px 10px",
                          fontSize: ".8rem",
                          fontWeight: "bold",
                        }}
                      >
                        Apartments For Sale In The Luxurious NISHANTASHI |
                        Carlton Project In Istanbul
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5px",
                        }}
                      >
                        <Typography
                          style={{ display: "flex", fontSize: "14px" }}
                        >
                          <EventAvailableIcon size="small" />
                          2022-02-22
                        </Typography>
                        <Typography
                          style={{ display: "flex", fontSize: "14px" }}
                        >
                          <VisibilityIcon size="small" />
                          548
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{ margin: "0px 10px 20px 10px" }}
                >
                  <Card variant="outlined" style={{ borderRadius: "10px" }}>
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
                          padding: "5px",
                        }}
                        className={classes.hover}
                      >
                        Apartments For Sale In The Luxurious NISHANTASHI |
                        Carlton Project In Istanbul
                      </Typography>
                      <Typography
                        style={{
                          margin: "10px 10px 20px 10px",
                          fontSize: ".8rem",
                          fontWeight: "bold",
                        }}
                      >
                        Apartments For Sale In The Luxurious NISHANTASHI |
                        Carlton Project In Istanbul
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5px",
                        }}
                      >
                        <Typography
                          style={{ display: "flex", fontSize: "14px" }}
                        >
                          <EventAvailableIcon
                            size="small"
                            className={classes.icons}
                          />
                          2022-02-22
                        </Typography>
                        <Typography
                          style={{ display: "flex", fontSize: "14px" }}
                        >
                          <VisibilityIcon
                            size="small"
                            className={classes.icons}
                          />
                          548
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </Grid>

              {/* Right - Right */}
              <Grid item xs={12} style={{ margin: "0 0 10px 0" }}>
                <Grid item xs={12} md={12} tyle={{}}>
                  <Card className={classes.rootHor}>
                    <CardMedia
                      className={classes.cover}
                      image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                      title="Live from space album cover"
                    />
                    <div className={classes.details}>
                      <CardContent
                        className={classes.content}
                        style={{ paddingBottom: "0px" }}
                      >
                        <Typography
                          component="p"
                          variant="p"
                          style={{ marginBottom: "42px", fontSize: "12px" }}
                        >
                          Live From Space Live From Space Live From Space
                        </Typography>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <EventAvailableIcon
                              size="small"
                              className={classes.icons}
                            />
                            2022-02-22
                          </Typography>
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <VisibilityIcon
                              size="small"
                              className={classes.icons}
                            />
                            548
                          </Typography>
                        </Box>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} md={12} tyle={{}}>
                  <Card className={classes.rootHor}>
                    <CardMedia
                      className={classes.cover}
                      image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                      title="Live from space album cover"
                    />
                    <div className={classes.details}>
                      <CardContent
                        className={classes.content}
                        style={{ paddingBottom: "0px" }}
                      >
                        <Typography
                          component="p"
                          variant="p"
                          style={{ marginBottom: "42px", fontSize: "12px" }}
                        >
                          Live From Space Live From Space Live From Space
                        </Typography>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <EventAvailableIcon
                              size="small"
                              className={classes.icons}
                            />
                            2022-02-22
                          </Typography>
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <VisibilityIcon
                              size="small"
                              className={classes.icons}
                            />
                            548
                          </Typography>
                        </Box>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>{" "}
                <Grid item xs={12} md={12} tyle={{}}>
                  <Card className={classes.rootHor}>
                    <CardMedia
                      className={classes.cover}
                      image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                      title="Live from space album cover"
                    />
                    <div className={classes.details}>
                      <CardContent
                        className={classes.content}
                        style={{ paddingBottom: "0px" }}
                      >
                        <Typography
                          component="p"
                          variant="p"
                          style={{ marginBottom: "42px", fontSize: "12px" }}
                        >
                          Live From Space Live From Space Live From Space
                        </Typography>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <EventAvailableIcon
                              size="small"
                              className={classes.icons}
                            />
                            2022-02-22
                          </Typography>
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <VisibilityIcon
                              size="small"
                              className={classes.icons}
                            />
                            548
                          </Typography>
                        </Box>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>{" "}
                <Grid item xs={12} md={12} tyle={{}}>
                  <Card className={classes.rootHor}>
                    <CardMedia
                      className={classes.cover}
                      image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                      title="Live from space album cover"
                    />
                    <div className={classes.details}>
                      <CardContent
                        className={classes.content}
                        style={{ paddingBottom: "0px" }}
                      >
                        <Typography
                          component="p"
                          variant="p"
                          style={{ marginBottom: "42px", fontSize: "12px" }}
                        >
                          Live From Space Live From Space Live From Space
                        </Typography>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <EventAvailableIcon
                              size="small"
                              className={classes.icons}
                            />
                            2022-02-22
                          </Typography>
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <VisibilityIcon
                              size="small"
                              className={classes.icons}
                            />
                            548
                          </Typography>
                        </Box>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>{" "}
                <Grid item xs={12} md={12} tyle={{}}>
                  <Card className={classes.rootHor}>
                    <CardMedia
                      className={classes.cover}
                      image="https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg"
                      title="Live from space album cover"
                    />
                    <div className={classes.details}>
                      <CardContent
                        className={classes.content}
                        style={{ paddingBottom: "0px" }}
                      >
                        <Typography
                          component="p"
                          variant="p"
                          style={{ marginBottom: "42px", fontSize: "12px" }}
                        >
                          Live From Space Live From Space Live From Space
                        </Typography>

                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "5px",
                          }}
                        >
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <EventAvailableIcon
                              size="small"
                              className={classes.icons}
                            />
                            2022-02-22
                          </Typography>
                          <Typography
                            style={{ display: "flex", fontSize: "14px" }}
                          >
                            <VisibilityIcon
                              size="small"
                              className={classes.icons}
                            />
                            548
                          </Typography>
                        </Box>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
      </Container>
    </section>
  );
}

export default Index;
