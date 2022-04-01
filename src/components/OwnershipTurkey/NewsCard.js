import React from 'react'
import { Box, Container, Link, Typography, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// Icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import VisibilityIcon from "@material-ui/icons/Visibility";
// Functions
import { makeStyles, alpha } from "@material-ui/core/styles";
import LimitTextFunc from '../common/LimitTextFunc'

const useStyles = makeStyles((theme) => ({

  boxImagesmall: {
    backgroundImage:
      "url('https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg')",
    backgroundSize: "cover",
    height: "200px",
    width: '100%',
    objectFit: 'cover',
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
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
  content: {
    flex: "1 0 auto",
    paddingBottom: "0px",
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
  const classes = useStyles();
  return (
      <Grid item xs={12} md={6} lg={4}>
        <Grid item >

          <Card
            variant="outlined"
            style={{ borderRadius: "10px" }}
          >

            <Box className={classes.boxImagesmall}>

              <span className={classes.span}>New</span>

              <Typography className={classes.paragsmall} variant="h2">
                An increase of
              </Typography>

            </Box>

            <Box style={{
              backgroundColor: "#eee",
              padding: '1rem',
              height: 'calc(100% - 200px)',
            }}>

              <Typography
                style={{
                  width: "100%",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  padding: "5px",
                }}
                className={classes.hover}
              >
                An Exclusive Interview With The CEO Of Imtilak Real Estate About The Rise In Real Estate Prices In Turkey
              </Typography>

              <Typography
                style={{
                  margin: "10px 10px 20px 10px",
                  fontSize: "0.8rem",
                  fontWeight: "light",
                  color: '#37404d',
                }}
              >
                {LimitTextFunc('According to the statistical data issued by the Turkish Statistical Agency TÜİK, sales of apartments in Turkey during January of this year amounted to 88,306 apartments.', 120)}
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
        </Grid>

      </Grid>
  )
}

export default Index