import { Box, Container, Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import ModalCom from "./Modal";
const useStyles = makeStyles((theme) => ({
  boxImage: {
    backgroundImage: "url('https://www.imtilak.net/assets/img/channel.jpg')",
    backgroundSize: "cover",
    height: "380px",
    backgroundPosition: "right",
    borderRadius: "10px",
  },

  testimonial: {
    height: "550px",
  },
  root: {
    height: "310px",
    backgroundColor: "#eee",
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

function Index(props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:725px)");
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
            Imtilak Channel
          </Typography>
          <Typography
            style={{ marginInline: "0px", marginBlock: "10px", width: "80%" }}
          >
            <Typography>
              {" "}
              Find the most important information about secrets of the Turkish
              real estate, news of Turkish citizenship in return for owning a
              property, A-to-Z of owning real estate, the best offers and
              investment opportunities in Turkey
            </Typography>
          </Typography>
        </Box>

        <Grid
          xs={12}
          md={12}
          style={{
            display: "flex",
          }}
        >
          {isDesktop ? (
            <>
              <Grid item xs={6} md={6}>
                <Card variant="outlined" style={{ borderRadius: "10px" }}>
                  <Box className={classes.boxImage}></Box>
                </Card>
              </Grid>

              <Grid
                item
                xs={6}
                md={6}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Grid item xs={12} md={12} style={{ display: "flex" }}>
                  <Grid item xs={6} md={6} style={{ margin: "0px 37px" }}>
                    <ModalCom />
                  </Grid>
                  <Grid item xs={6} md={6} tyle={{ margin: "0px 37px" }}>
                    <ModalCom />
                  </Grid>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex" }}>
                  <Grid item xs={6} md={6} style={{ margin: "0px 37px" }}>
                    <ModalCom />
                  </Grid>
                  <Grid item xs={6} md={6} tyle={{ margin: "0px 37px" }}>
                    <ModalCom />
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <Card variant="outlined" style={{ borderRadius: "10px" }}>
                <Box className={classes.boxImage}></Box>
              </Card>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "25px",
                  gap: "15px",
                }}
              >
                <Grid
                  item
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <ModalCom />

                  <Link to="/channels">
                    <Grid item xs={6} md={6}>
                      <Box style={{ width: "100%" }}>
                        <img
                          alt="img"
                          style={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "10px",
                          }}
                          src="https://i.ytimg.com/vi/zYDcpdCHxAM/hqdefault.jpg"
                        />
                      </Box>
                      <Typography style={{ width: "100%", margin: "10px 1px" }}>
                        Apartments For Sale In The Luxurious NISHANTASHI |
                        Carlton Project In Istanbul
                      </Typography>
                    </Grid>
                  </Link>
                </Grid>

                <Grid
                  item
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <Link to="/channels">
                    <Grid item xs={6} md={6}>
                      <ModalCom />
                    </Grid>
                  </Link>
                  <Link to="/channels">
                    <Grid item xs={6} md={6}>
                      <ModalCom />
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </section>
  );
}

export default Index;
