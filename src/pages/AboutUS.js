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
import NeedHelp from "../components/common/NeedHelp";
import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTranslation } from "react-i18next";

import { withStyles, makeStyles } from "@material-ui/core/styles";

// import TableCell from "@material-ui/core/TableCell";

// import TableRow from "@material-ui/core/TableRow";

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
    height: "250px",
    backgroundColor: "#9c344c",
    color: "white",
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
  backBlock: {
    borderRadius: "8px",
    border: "1px solid #c5c5c5",
    background: "#fff",
    marginTop: "10px",
  },
}));

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: "#ddd",
//     },
//   },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData(1, "Antalya", "78%", "178%"),
//   createData(2, "Antalya", "78%", "178%"),
//   createData(3, "Antalya", "78%", "178%"),
//   createData(4, "Antalya", "78%", "178%"),
//   createData(5, "Antalya", "78%", "178%"),
// ];
// const rows2 = [
//   createData(1, "78%", "178%"),
//   createData(2, "78%", "178%"),
//   createData(3, "78%", "178%"),
//   createData(4, "78%", "178%"),
//   createData(5, "78%", "178%"),
// ];

function Index() {
  const { t, i18n } = useTranslation();

  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1125px)");
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
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    color="primary"
                  >
                    Buy Now, Pay Later
                    <br />
                    <br />
                    Flexible installment Apartments for sale in Turkey
                  </Typography>
                  <img
                    className={classes.image}
                    src="https://www.imtilak.net/uploads/banners/d252c0552d0b4f400daaf9a35b9e2717vYI228.png"
                    alt="img"
                  />
                </Box>
              </Card>
            </Grid>

            <Grid item xl={9} md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className={classes.backBlock}
              >
                <Typography className={classes.Header} variant="h4">
                  {" "}
                  Terms of Use
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
                      fontSize: "20px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    Learn more about Imtilak real estate terms of use, and how
                    we use and save your personal data that you provide.{" "}
                  </Typography>
                </Typography>
              </Box>

              <div className={classes.hero}>
                <Box>
                  <img
                    style={{ width: "100%", borderRadius: "10px" }}
                    src="https://www.imtilak.net/image/440/255/pages/c0652e9ea8b21ebc0c779839c9bc261413.jpg"
                    alt="img"
                  />
                  <br />

                  <br />

                  <Typography>
                    Greeting to all our esteemed customers in{" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      Imtilak
                    </span>{" "}
                    Real Estate website. We would like to draw your kind
                    attention to Imtilak Real Estate Website Terms of Use
                    starting with the fact that surfing this website contains a
                    tacit consent to the terms of use of Imtilak Real Estate
                    website along with its privacy policy.
                  </Typography>
                  <br />

                  <Typography>
                    <span style={{ color: "#9c344c", fontWeight: "bold" }}>
                      Second:{" "}
                    </span>
                    Moreover, all of Imtilak Real Estate websites and pages on
                    the social networking sites, and all of Imtilak Group
                    numerous electronic accounts on the World Wide Web are
                    formally registered as a Turkish brand. Namely, they are
                    registered at the Higher Institute for Turkish brands and at
                    the Google Network as a Turkish brand as follows: Logo and
                    brand, websites, website designing, search, and articles.
                  </Typography>
                  <br />

                  <Typography>
                    When it is proved that any entity, be that within the
                    territory of the Republic of Turkey or on the World Wide
                    Web, has copied, published, or used any written script,
                    photos, videos, or any other materials of Imtilak Group
                    websites, including Imtilak Real Estate website, and that
                    was for commercial purposes, without a prior written
                    permission from Imtilak Group Management, the legal
                    department in Imtilak shall submit a written complaint to
                    the Higher Institute of brands and Intellectual Creations
                    Rights and mail a complaint to Google Network to inform
                    about the breach and get the legal procedures started.
                    <span
                      style={{
                        color: "#9c344c",
                        fontWeight: "bold",
                        marginInline: "5px",
                      }}
                    >
                      here:{" "}
                    </span>
                  </Typography>
                  <br />

                  <Typography>
                    Moreover, those who find themselves qualified to join our
                    team may also apply for the currently employed jobs using
                    the same foregoing employment application form. We will keep
                    the forms in our archive to contact them when there is a
                    vacancy.
                  </Typography>
                  <br />

                  <Typography
                    color="primary"
                    style={{ fontWeight: "bold", marginBlock: "15px" }}
                  >
                    What are the Terms of Use of Imtilak Real Estate Website?
                  </Typography>
                  <iframe
                    title="iFrame"
                    width="100%"
                    height="415"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </Box>
              </div>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xl={12}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className={classes.backBlock}
              >
                <Typography className={classes.Header} variant="h4">
                  {" "}
                  Terms of Use
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
                      fontSize: "20px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    Learn more about Imtilak real estate terms of use, and how
                    we use and save your personal data that you provide.{" "}
                  </Typography>
                </Typography>
              </Box>
              <div className={classes.hero}>
                <Box>
                  <img
                    style={{ width: "100%", borderRadius: "10px" }}
                    src="https://www.imtilak.net/image/440/255/pages/c0652e9ea8b21ebc0c779839c9bc261413.jpg"
                    alt="img"
                  />
                  <br />

                  <br />

                  <Typography>
                    Greeting to all our esteemed customers in{" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      Imtilak
                    </span>{" "}
                    Real Estate website. We would like to draw your kind
                    attention to Imtilak Real Estate Website Terms of Use
                    starting with the fact that surfing this website contains a
                    tacit consent to the terms of use of Imtilak Real Estate
                    website along with its privacy policy.
                  </Typography>
                  <br />

                  <Typography>
                    <span style={{ color: "#9c344c", fontWeight: "bold" }}>
                      Second:{" "}
                    </span>
                    Moreover, all of Imtilak Real Estate websites and pages on
                    the social networking sites, and all of Imtilak Group
                    numerous electronic accounts on the World Wide Web are
                    formally registered as a Turkish brand. Namely, they are
                    registered at the Higher Institute for Turkish brands and at
                    the Google Network as a Turkish brand as follows: Logo and
                    brand, websites, website designing, search, and articles.
                  </Typography>
                  <br />

                  <Typography>
                    When it is proved that any entity, be that within the
                    territory of the Republic of Turkey or on the World Wide
                    Web, has copied, published, or used any written script,
                    photos, videos, or any other materials of Imtilak Group
                    websites, including Imtilak Real Estate website, and that
                    was for commercial purposes, without a prior written
                    permission from Imtilak Group Management, the legal
                    department in Imtilak shall submit a written complaint to
                    the Higher Institute of brands and Intellectual Creations
                    Rights and mail a complaint to Google Network to inform
                    about the breach and get the legal procedures started.
                    <span
                      style={{
                        color: "#9c344c",
                        fontWeight: "bold",
                        marginInline: "5px",
                      }}
                    >
                      here:{" "}
                    </span>
                  </Typography>
                  <br />

                  <Typography>
                    Moreover, those who find themselves qualified to join our
                    team may also apply for the currently employed jobs using
                    the same foregoing employment application form. We will keep
                    the forms in our archive to contact them when there is a
                    vacancy.
                  </Typography>
                  <br />

                  <Typography
                    color="primary"
                    style={{ fontWeight: "bold", marginBlock: "15px" }}
                  >
                    What are the Terms of Use of Imtilak Real Estate Website?
                  </Typography>
                  <iframe
                    title="iFrame"
                    width="100%"
                    height="415"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </Box>
              </div>
              <NeedHelp />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Index;
