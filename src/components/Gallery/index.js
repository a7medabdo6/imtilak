import { Box, Container, Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "react-multi-carousel/lib/styles.css";

import Card from "@material-ui/core/Card";

// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxImage: {
    backgroundImage:
      "url('https://www.imtilak.net/uploads/city/8acbcb25df0abc00f0b0d136ad5970f85NX245.png')",
    backgroundSize: "cover",
    height: "535px",
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
    color: "white",
    height: "100%",
    background: "rgba(0,0,0,.2)",
    width: "100%",
    top: "0",
    margin: "0",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    transition: "all 1s ease",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  paragsmall: {
    position: "absolute",
    color: "white",
    height: "97%",
    background: "rgba(0,0,0,.2)",
    width: "100%",
    top: "0",
    margin: "0",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    transition: "all 1s ease",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },

  m_boxImage: {
    backgroundImage:
      "url('https://www.imtilak.net/uploads/city/8acbcb25df0abc00f0b0d136ad5970f85NX245.png')",
    backgroundSize: "cover",
    height: "110px",
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
  },
  m_parag: {
    position: "absolute",
    color: "white",
    height: "100%",
    background: "rgba(0,0,0,.2)",
    width: "100%",
    top: "0",
    margin: "0",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    transition: "all 1s ease",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  m_boxImagesmall: {
    backgroundImage:
      "url('https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg')",
    backgroundSize: "cover",
    height: "150px",
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
  },

  m_paragsmall: {
    position: "absolute",
    color: "white",
    height: "97%",
    background: "rgba(0,0,0,.2)",
    width: "100%",
    top: "0",
    margin: "0",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    transition: "all 1s ease",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
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
    margin: "10px 0px 10px 0px",
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

function Index(props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:900px)");
  const classes = useStyles();

  return (
    <section className="testimonial">
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px" }}
      >
        <Box
          style={{
            paddingTop: "20px",
          }}
        >
          <Typography className={classes.Header} variant="h4">
            {" "}
            Turkey Properties{" "}
          </Typography>
          <Typography
            style={{ marginInline: "0px", marginBlock: "10px", width: "80%" }}
          ></Typography>
        </Box>

        <Grid xs={12} md={12} style={{ display: "flex" }}>
          {isDesktop ? (
            <>
              <Grid item xs={4} md={4}>
                <Link to="/for-resale">
                  <Card variant="outlined" style={{ borderRadius: "10px" }}>
                    <Box className={classes.boxImage}>
                      <Typography className={classes.parag} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Card>
                </Link>
              </Grid>

              <Grid
                item
                xs={8}
                md={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 0 -10px 10px",
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    gap: "0px 10px",
                  }}
                >
                  <Grid item xs={4} md={4}>
                    <Link to="/for-resale">
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "170px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/c8362514a6af0b298a5d2da8d0a506e515.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Link to="/for-resale">
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "170px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/c8362514a6af0b298a5d2da8d0a506e515.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Link to="/for-resale">
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "170px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/c8362514a6af0b298a5d2da8d0a506e515.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    gap: "0px 10px",
                  }}
                >
                  <Grid item xs={4} md={4}>
                    <Box style={{ width: "100%", position: "relative" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "170px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        src="https://www.imtilak.net/uploads/city/241b890f96ac87ca5e35226fefd294df9.jpg"
                        alt="img"
                      />
                      <Typography className={classes.paragsmall} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Box style={{ width: "100%", position: "relative" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "170px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        src="https://www.imtilak.net/uploads/city/241b890f96ac87ca5e35226fefd294df9.jpg"
                        alt="img"
                      />
                      <Typography className={classes.paragsmall} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Box style={{ width: "100%", position: "relative" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "170px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        src="https://www.imtilak.net/uploads/city/241b890f96ac87ca5e35226fefd294df9.jpg"
                        alt="img"
                      />
                      <Typography className={classes.paragsmall} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    gap: "0px 10px",
                  }}
                >
                  <Grid item xs={4} md={4}>
                    <Box style={{ width: "100%", position: "relative" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "170px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        src="https://www.imtilak.net/uploads/city/6756ae8a972ce705cac6dff4d317526939i134.jpg"
                        alt="img"
                      />
                      <Typography className={classes.paragsmall} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Box style={{ width: "100%", position: "relative" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "170px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        src="https://www.imtilak.net/uploads/city/6756ae8a972ce705cac6dff4d317526939i134.jpg"
                        alt="img"
                      />
                      <Typography className={classes.paragsmall} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Box style={{ width: "100%", position: "relative" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "170px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        src="https://www.imtilak.net/uploads/city/6756ae8a972ce705cac6dff4d317526939i134.jpg"
                        alt="img"
                      />
                      <Typography className={classes.paragsmall} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  rowGap: "10px",
                }}
              >
                <Grid item xs={12}>
                  <Card
                    variant="outlined"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    <Box className={classes.m_boxImage}>
                      <Typography className={classes.m_parag} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    rowGap: "10px",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      gap: "0px 20px",
                    }}
                  >
                    <Grid item xs={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/c8362514a6af0b298a5d2da8d0a506e515.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/c8362514a6af0b298a5d2da8d0a506e515.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      gap: "0px 20px",
                    }}
                  >
                    <Grid item xs={6} md={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/241b890f96ac87ca5e35226fefd294df9.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/241b890f96ac87ca5e35226fefd294df9.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      gap: "0px 20px",
                    }}
                  >
                    <Grid item xs={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/6756ae8a972ce705cac6dff4d317526939i134.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/6756ae8a972ce705cac6dff4d317526939i134.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      gap: "0px 20px",
                    }}
                  >
                    <Grid item xs={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/c8362514a6af0b298a5d2da8d0a506e515.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box style={{ width: "100%", position: "relative" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                          src="https://www.imtilak.net/uploads/city/241b890f96ac87ca5e35226fefd294df9.jpg"
                          alt="img"
                        />
                        <Typography className={classes.paragsmall} variant="h2">
                          <Typography
                            style={{
                              margin: "auto",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                            }}
                          >
                            An increase
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </div>

                <Grid item xs={12}>
                  <Card
                    variant="outlined"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    <Box className={classes.m_boxImage}>
                      <Typography className={classes.m_parag} variant="h2">
                        <Typography
                          style={{
                            margin: "auto",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                          }}
                        >
                          An increase
                        </Typography>
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </section>
  );
}

export default Index;
