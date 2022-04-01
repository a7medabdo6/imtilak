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
import { useTranslation } from "react-i18next";

import Collapse from "../components/Collapsed/Colapse";
import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
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
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#ddd",
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Antalya", "78%", "178%"),
  createData(2, "Antalya", "78%", "178%"),
  createData(3, "Antalya", "78%", "178%"),
  createData(4, "Antalya", "78%", "178%"),
  createData(5, "Antalya", "78%", "178%"),
];
const rows2 = [
  createData(1, "78%", "178%"),
  createData(2, "78%", "178%"),
  createData(3, "78%", "178%"),
  createData(4, "78%", "178%"),
  createData(5, "78%", "178%"),
];
function Index() {
  const { t, i18n } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:900px)");

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
          <Grid container xs={12} md={3} style={{ display: "block" }}>
            <Card className={classes.margin} style={{ position: "relative" }}>
              <Box className={classes.padding}>
                <Typography variant="h5">Search for your apartment</Typography>
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
            <Card className={classes.margin2} style={{ position: "relative" }}>
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
        ) : (
          ""
        )}

        <Grid item xs={12} md={9}>
          <Box
            style={{
              padding: "20px",
              paddingTop: "30px",
            }}
            className="testimonial"
          >
            <Typography className={classes.Header} variant="h4">
              {" "}
              Real Estate In Turkey Outperforms Foreign Currencies In Its
              Investment Returns
            </Typography>
            <Typography
              style={{
                marginInline: "0px",
                marginBlock: "10px",
                fontSize: "20px",
                textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
              }}
            >
              <Typography
                style={{
                  marginInline: "0px",
                  marginBlock: "10px",
                  fontSize: "16px",
                  textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                  color: "#5f6670",
                }}
              >
                {" "}
                Imtilak provides answers to all questions related to Turkish
                citizenship and how to obtain it, as follows:
              </Typography>
              <Typography
                style={{
                  marginInline: "20px",
                  marginBlock: "10px",
                  fontSize: "16px",
                  textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                  color: "#5f6670",
                }}
              >
                <ul>
                  <li>Turkish Citizenship Advantages</li>
                  <li>Turkish Citizenship Advantages</li>{" "}
                  <li>Turkish Citizenship Advantages</li>{" "}
                  <li>Turkish Citizenship Advantages</li>{" "}
                  <li>Turkish Citizenship Advantages</li>{" "}
                </ul>
              </Typography>
            </Typography>
            <Typography
              className={classes.Header}
              style={{
                textAlign: "center",
                margin: "10px 0px",
              }}
              variant="h4"
            >
              {" "}
              How can we help you?
            </Typography>
            <input
              style={{
                width: "80%",
                textAlign: "center",
                background: "#eee",
                padding: "1rem",
                margin: "auto",
                display: "block",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderTopRightRadius: "15px",
                borderTopLeftRadius: "15px",
              }}
            />
            <Typography
              className={classes.Header}
              style={{
                textAlign: "center",
                margin: "10px 0px",
                fontSize: "16px",
              }}
              variant="h5"
            >
              {" "}
              You can browse below to find the topic you are looking for
            </Typography>
          </Box>
          <Box
            style={{
              padding: "20px",
              paddingTop: "30px",
            }}
            className="testimonial"
          >
            <Typography className={classes.Header} variant="h4">
              {" "}
              Frequently Asked Questions
              <span
                style={{
                  marginInline: "15px",
                  color: "gray",
                  fontSize: "16px",
                  fontWeight: "normal",
                }}
              >
                "Turkish Citizenship Questions "
              </span>
            </Typography>

            <Typography
              className={classes.Header}
              style={{
                textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                margin: "10px 0px",
                fontSize: "16px",
              }}
              variant="h5"
            >
              <Grid xs={12} md={12} style={{ display: "flex" }}>
                <Grid xs={6} md={6} style={{ display: "" }}>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                      fontSize: "16px",
                    }}
                    variant="h5"
                  >
                    Turkish Citizenship Questions
                  </Typography>
                  <Grid xs={12} md={12} style={{ display: "flex" }}>
                    <Collapse
                      label="How to get Turkish citizenship?"
                      text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
                    />
                  </Grid>

                  <Grid xs={12} md={12} style={{ display: "flex" }}>
                    <Collapse
                      label="How to get Turkish citizenship?"
                      text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
                    />
                  </Grid>
                  <Grid xs={12} md={12} style={{ display: "flex" }}>
                    <Collapse
                      label="How to get Turkish citizenship?"
                      text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
                    />
                  </Grid>
                </Grid>
                <Grid xs={6} md={6} style={{ display: "" }}>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                      fontSize: "16px",
                    }}
                    variant="h5"
                  >
                    Turkish Citizenship Questions
                  </Typography>
                  <Grid xs={12} md={12} style={{ display: "flex" }}>
                    <Collapse
                      label="How to get Turkish citizenship?"
                      text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
                    />
                  </Grid>

                  <Grid xs={12} md={12} style={{ display: "flex" }}>
                    <Collapse
                      label="How to get Turkish citizenship?"
                      text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
                    />
                  </Grid>
                  <Grid xs={12} md={12} style={{ display: "flex" }}>
                    <Collapse
                      label="How to get Turkish citizenship?"
                      text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
