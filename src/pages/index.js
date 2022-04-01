import React from "react";
import "./style.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import TimeLine from "./Timeline";

import NeedHelp from "../components/common/NeedHelp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    boxSizing: "border-box",
  },
  padding: {
    padding: "10px 20px",
    textAlign: "center",
  },
  btn2: {
    paddingBlock: "10px",
    backgroundColor: "#9c344c",
    color: "white",
    textAlign: "center",
    position: "absolute",
    width: "100%",
    left: "0px",
    fontSize: "1.5rem",
    bottom: "0px",
    right: "0px",
    "&:hover": {
      backgroundColor: "#9c344c",
      color: "white",
    },
  },
  margin: {
    margin: "10px 10px",
    height: "450px",
    //border: "1px solid gray",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  margin2: {
    margin: "10px 10px",
    height: "400px",
    //border: "1px solid gray",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  marginTop: {
    margin: "10px 0px",
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    maxWidth: "100%",
    width: "95%",
    height: "50%",
    marginTop: "25px",
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px 25px",
    color: "white",
    fontSize: "16px",
    position: "absolute",
    marginTop: "25px",
    right: "10%",
    /* width: 100%; */
    left: "25%",
    bottom: "5%",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "white",
      border: "1px solid white",
      transition: "all 1s ease",
    },
  },
  Header: {
    color: theme.palette.primary.main,
  },
}));
function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1150px)");
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      style={{ position: "relative", paddingBottom: "25px" }}
    >
      <Grid xs={12} md={12} style={{ display: "flex" }}>
        {isDesktop ? (
          <>
            <Grid container xs={12} md={3} style={{ display: "block" }}>
              <Card className={classes.margin} style={{ position: "relative" }}>
                <Box className={classes.padding}>
                  <Typography variant="h5">
                    Search for your apartment
                  </Typography>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    className={classes.marginTop}
                  />

                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      className={classes.marginTop}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>egypt</MenuItem>
                      <MenuItem value={20}>egypt</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField
                      id="standard-basic"
                      label="Standard"
                      className={classes.marginTop}
                    />
                  </FormControl>

                  <TextField
                    className={classes.marginTop}
                    id="standard-basic"
                    label="E-mail"
                  />

                  <TextField id="standard-basic" label="the desired" />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                    style={{}}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>

              <Card
                className={classes.margin2}
                style={{ position: "relative" }}
              >
                <Box className={classes.padding}>
                  <Typography
                    variant="h5"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                    color="primary"
                  >
                    All you need to know about obtaining citizenship through
                    buying a property
                  </Typography>
                  <img
                    className={classes.image}
                    src="https://www.imtilak.net/assets/img/turkish-passport.png"
                    alt="img"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn2}
                    style={{}}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xl={9} md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="testimonial"
              >
                <Typography className={classes.Header} variant="h4">
                  {" "}
                  Contact Us{" "}
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    width: "80%",
                  }}
                >
                  <Typography>
                    {" "}
                    Here at Imtilak spotlight, you will find all the activities
                    and events of Imtilak Real Estate company which includes
                    press interviews, meetings, partnerships with a number of
                    municipalities and government agencies, annual celebrations
                    and events, train{" "}
                  </Typography>
                </Typography>
              </Box>
              <div class="timeline-container">
                <ul class="timeline">
                  <TimeLine />
                  <TimeLine />
                </ul>
              </div>
            </Grid>
          </>
        ) : (
          <Grid item xl={12}>
            <Box
              style={{
                padding: "20px",
                paddingTop: "30px",
              }}
              className="testimonial"
            >
              <Typography className={classes.Header} variant="h4">
                {" "}
                Contact Us{" "}
              </Typography>
              <Typography
                style={{
                  marginInline: "0px",
                  marginBlock: "10px",
                  width: "80%",
                }}
              >
                <Typography>
                  {" "}
                  Here at Imtilak spotlight, you will find all the activities
                  and events of Imtilak Real Estate company which includes press
                  interviews, meetings, partnerships with a number of
                  municipalities and government agencies, annual celebrations
                  and events, train{" "}
                </Typography>
              </Typography>
            </Box>
            <div class="timeline-container">
              <ul class="timeline">
                <TimeLine />
                <TimeLine />
              </ul>
            </div>
            <NeedHelp />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Index;
