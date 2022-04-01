import React from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import Collapse from "../Collapsed/Colapse";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

import { withStyles, makeStyles } from "@material-ui/core/styles";
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
    width: "100%",
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  image: {
    maxWidth: "100%",
    width: "95%",
    height: "50%",
    marginTop: "25px",
  },
  hero: {
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    margin: "20px 0px",
    border: "1px solid #c5c5c5",
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px 25px",
    color: "white",
    fontSize: "16px",
    marginTop: "25px",
    width: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      padding: "10px 25px",
      color: "white",
    },
  },
  Header: {
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "white",
    color: "#9c344c",
    borderRadius: "8px",
    padding: "15px 20px",
    width: "170px",
    textAlign: "center",
    border: "1px solid #9c344c",
    cursor: "pointer",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "#9c344c",
      color: "white",
    },
  },
  /*=================================================*/
  boxImage: {
    backgroundImage:
      "url('https://www.imtilak.net/uploads/news/9b9f0a8e5a104ee56dc2fce080136220EKG295.png')",
    backgroundSize: "cover",
    height: "100%",
    backgroundPosition: "center",
    borderRadius: "10px",
    position: "relative",
  },
  boxImage2: {
    backgroundImage:
      "url('https://www.imtilak.net/assets/img/turkish-citizenship/contact-bannar.png')",
    backgroundSize: "cover",
    height: "100%",
    backgroundPosition: "center",
    borderRadius: "10px",
    position: "relative",
  },
  boxImagesmall: {
    backgroundImage:
      "url('https://www.imtilak.net/image/400/200/news/213794285b9f04df91193102ee9379b8uej102.jpg')",
    backgroundSize: "cover",
    height: "230px",
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
    fontSize: "1rem",
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
    height: "97.5%",
  },
}));

function LastSection() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box
        style={{
          padding: "20px",
          paddingTop: "30px",
        }}
        className="testimonial"
      >
        <Typography className={classes.Header} variant="h4">
          {" "}
          Turkish Citizenship Questions
        </Typography>

        <Typography
          className={classes.Header}
          style={{
            textAlign: "center",
            margin: "10px 0px",
            fontSize: "16px",
          }}
          variant="h5"
        >
          <Collapse
            label="How to get Turkish citizenship?"
            text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
          />{" "}
          <Collapse
            label="How to get Turkish citizenship?"
            text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
          />{" "}
          <Collapse
            label="How to get Turkish citizenship?"
            text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
          />{" "}
        </Typography>
        <Typography className={classes.button} style={{}}>
          Read More
        </Typography>
      </Box>
      <Grid container xs={12} md={12} style={{ marginTop: "30px" }}>
        <Grid item xs={12} md={5} style={{ display: "block" }}>
          <Card className={classes.margin} style={{ position: "relative" }}>
            <Box className={classes.padding}>
              <Typography variant="h5">
                Let us contact you to help you
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
                  style={{ width: "50px" }}
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

              <TextField
                id="standard-basic"
                className={classes.marginTop}
                label="the desired"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                style={{}}
              >
                send{" "}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.boxImage2}></Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LastSection;
