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

import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ShareIcon from "@material-ui/icons/Share";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
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
  backBlock: {
    borderRadius: "8px",
    border: "1px solid #c5c5c5",
    background: "#fff",
    marginTop: "10px",
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
// const rows2 = [
//   createData(1, "78%", "178%"),
//   createData(2, "78%", "178%"),
//   createData(3, "78%", "178%"),
//   createData(4, "78%", "178%"),
//   createData(5, "78%", "178%"),
// ];
function Index(props) {
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
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                    color="primary"
                  >
                    All you need to know about obtaining citizenship through
                    buying a property
                  </Typography>
                  <img
                    className={classes.image}
                    src="https://www.imtilak.net/assets/img/turkish-passport.png"
                    alt="Img"
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
                className={classes.backBlock}
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
                    textAlign: "center",
                  }}
                >
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Residential apartments in Turkey witnessed an increase in
                    their investment value of 63% over the past year, and 132%
                    over the past two years.
                  </Typography>
                </Typography>
              </Box>

              <div className={classes.hero}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/image/440/255/news/7a62a9ba5b4f586d6467648a23a7d98a7md195.jpg"
                    alt="Img"
                  />
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px 0px",
                    }}
                  >
                    <div
                      class="eye-count d-flex ml-0 mr-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <VisibilityIcon style={{ marginInline: "5px" }} />
                      <span class="ml-2 number">714</span>
                    </div>
                    <div
                      class="date d-flex mr-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#5f6670", marginInline: "10px" }}>
                        2022-02-01
                      </span>
                      Last update
                      <span
                        style={{ color: "#5f6670", marginInline: "10px" }}
                        class="ml-3 font-weight-light"
                      >
                        2022-02-03
                      </span>
                    </div>

                    <Box>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div class="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                  </Box>

                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                    variant="h4"
                  >
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
                        textAlign: `${
                          i18n.language == "ar" ? "right" : "left"
                        }`,
                      }}
                    >
                      {" "}
                      The real estate sector in Turkey has witnessed a great
                      development in recent years. This coincides with Turkey's
                      major economic, infrastructure and other, and this sector,
                      particularly during the Coronavirus crisis, has emerged as
                      one of the most important investment options that has
                      provided the investor with immunity against the losses
                      suffered by other investment sectors under the pandemic.
                      <br />
                      Sales figures during the past years have witnessed a
                      steady increase, reaching their peak during the last two
                      years, in which real estate sales in general and
                      apartments in particular witnessed unprecedented sales,
                      both internally and externally, which made Turkey a strong
                      competitor in the real estate market in developed
                      countries.
                    </Typography>
                  </Typography>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    {" "}
                    Table Of Contents
                  </Typography>
                  <Typography color="primary">
                    <ul>
                      <li>
                        A record rise in the investment value of Turkish
                        apartments over the past two years
                      </li>
                      <li style={{ marginInline: "20px" }}>
                        Residential apartments outperform foreign currencies in
                        increasing the investment value
                      </li>
                      <li style={{ marginInline: "20px" }}>
                        The total return on apartments exceeded 150% in two
                        years
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    A record rise in the investment value of Turkish apartments
                    over the past two years
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    According to a report prepared by the Turkish real estate
                    platform Endeksa, apartments in Turkey recorded an increase
                    in their investment value of 63% during the past year and
                    132% during the last two years.
                  </Typography>

                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    <span
                      color="primary"
                      style={{
                        color: "#9c344c",
                        margin: "0px 5px 0px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Antalya
                    </span>
                    topped the Turkish states that witnessed the largest
                    increase in the investment value of its apartments, with an
                    increase of 78% in 2021, and 178% during the past two years.
                    Istanbul came in second place with an increase of 75% during
                    the past year and 122% during the last two years, while
                    Bursa ranked third, with an increase of 56% over the past
                    year and 103% over the past two years.
                    <br />
                    <br />
                    The figures for the increase in the investment value of
                    residential apartments in Turkey and its five major states
                    were as follows:
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell style={{ fontWeight: "bold" }}>
                            Rank
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            State
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2021
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2020 & 2021
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.calories}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.fat}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.carbs}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    Residential apartments outperform foreign currencies in
                    increasing the investment value
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    The aforementioned report included a comparison between the
                    increase in the investment value of residential apartments
                    and the increase in foreign exchange rates against the
                    Turkish lira over the past two years. As the apartments
                    outperformed by an increase of 132% over the dollar, which
                    increased by only 97% during the same period, as well as the
                    euro, which increased by 102% against the Turkish lira
                    during the past two years, as well as the pound sterling,
                    which increased by an increase against the lira Turkish
                    121%.
                  </Typography>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/uploads/news/image_1643725810_5ojgJ2LHi527BqTTQA79cR2dmLo4sJzP9dqrqcug.jpeg"
                    alt="Img"
                  />
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/uploads/news/image_1643725814_CjIm9ineGWA58wEg3HJ1SWPrS22haUWYyfegJ8Us.jpeg"
                    alt="Img"
                  />
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    The figures for the increases in foreign exchange rates
                    against the Turkish lira in the report are as follows:
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell style={{ fontWeight: "bold" }}>
                            Currency
                          </StyledTableCell>

                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            The increase against the Turkish lira during 2021
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            The increase against the Turkish lira during 2020 &
                            2021
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                              {row.fat}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.carbs}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    The total return on apartments exceeded 150% in two years
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    The total investment return for apartments in Turkey has
                    reached 71% over the past year and 151% over the past two
                    years, according to a report by Endeksa real estate
                    platform.
                    <br />
                    <br />
                    Antalya also topped the Turkish states in the percentage of
                    total investment return for apartments, with a total return
                    of 86% during the year 2021, and 197% during the two years
                    2020 and 2021. Followed by{" "}
                    <span
                      color="primary"
                      style={{
                        color: "#9c344c",
                        margin: "0px 5px 0px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Istanbul
                    </span>{" "}
                    in second place, with a total return of 83% during the last
                    year and 139% during the last two years, and Brusa came in
                    third place with a total return of 63% during the past year
                    and 118% during the past two years.
                    <br />
                    <br />
                    The figures for the total return of apartments in Turkey and
                    its five major states were as follows:
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell style={{ fontWeight: "bold" }}>
                            Rank
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            State
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2021
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2020 & 2021
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.calories}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.fat}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.carbs}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box
                    style={{
                      marginBlock: "35px",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      Edited by{" "}
                      <Typography
                        style={{
                          fontWeight: "bold",
                          marginInline: "10px",
                        }}
                      >
                        Imtilak Real Estate©
                        <br />
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBlock: "16px",
                      }}
                    >
                      Reference:{" "}
                      <Typography
                        color="primary"
                        style={{
                          fontWeight: "bold",
                          marginInline: "10px",
                        }}
                      >
                        Endeksa
                        <br />
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Did you like this topic? You can share it with your
                      friends now.
                      <br />
                    </Typography>
                    <Box>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBlock: "20px",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div class="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                    <Typography
                      className={classes.Header}
                      style={{
                        textAlign: `${
                          i18n.language == "ar" ? "right" : "left"
                        }`,
                        margin: "30px 0px",
                        fontSize: "23px",
                      }}
                      variant="h3"
                    >
                      Tags{" "}
                    </Typography>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>{" "}
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
              <Grid
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  padding: "20px",
                }}
              >
                <Grid item xs={6} md={6}>
                  <Card
                    variant="outlined"
                    style={{ borderRadius: "10px", height: "97.5%" }}
                  >
                    <Box className={classes.boxImage}>
                      <span className={classes.span}>New</span>
                      <Typography className={classes.parag} variant="h5">
                        <Typography style={{ fontSize: "16px" }}>
                          Important articles
                        </Typography>
                        An exclusive interview with the CEO of Imtilak Real
                        Estate about the rise in real estate prices in Turkey
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <Grid item xs={12} md={12} style={{ margin: "0px 0px" }}>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{ margin: "0px 10px 20px 10px" }}
                    >
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
                              fontSize: "1rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className={classes.hover}
                          >
                            Ankara real estate records an unprecedented increase
                            in foreign sales in 2021
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: "1rem",
                              fontWeight: "",
                              color: "#37404d",
                            }}
                          >
                            Apartment sales to foreigners in Ankara increased by
                            50.3% compared to real estate sales for the past
                            year 2021.
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "15px",
                            }}
                          >
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <EventAvailableIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <VisibilityIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
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
                              fontSize: "1rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className={classes.hover}
                          >
                            Ankara real estate records an unprecedented increase
                            in foreign sales in 2021
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: "1rem",
                              fontWeight: "",
                              color: "#37404d",
                            }}
                          >
                            Apartment sales to foreigners in Ankara increased by
                            50.3% compared to real estate sales for the past
                            year 2021.
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "15px",
                            }}
                          >
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <EventAvailableIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <VisibilityIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              548
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
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
                  Real Estate In Turkey Outperforms Foreign Currencies In Its
                  Investment Returns
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Residential apartments in Turkey witnessed an increase in
                    their investment value of 63% over the past year, and 132%
                    over the past two years.
                  </Typography>
                </Typography>
              </Box>
              <div className={classes.hero}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/image/440/255/news/7a62a9ba5b4f586d6467648a23a7d98a7md195.jpg"
                    alt="Img"
                  />
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px 0px",
                    }}
                  >
                    <div
                      class="eye-count d-flex ml-0 mr-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <VisibilityIcon style={{ marginInline: "5px" }} />
                      <span class="ml-2 number">714</span>
                    </div>
                    <div
                      class="date d-flex mr-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#5f6670", marginInline: "10px" }}>
                        2022-02-01
                      </span>
                      Last update
                      <span
                        style={{ color: "#5f6670", marginInline: "10px" }}
                        class="ml-3 font-weight-light"
                      >
                        2022-02-03
                      </span>
                    </div>

                    <Box>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div class="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                  </Box>

                  <Typography
                    className={classes.Header}
                    style={{ textAlign: "left" }}
                    variant="h4"
                  >
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
                        textAlign: `${
                          i18n.language == "ar" ? "right" : "left"
                        }`,
                      }}
                    >
                      {" "}
                      The real estate sector in Turkey has witnessed a great
                      development in recent years. This coincides with Turkey's
                      major economic, infrastructure and other, and this sector,
                      particularly during the Coronavirus crisis, has emerged as
                      one of the most important investment options that has
                      provided the investor with immunity against the losses
                      suffered by other investment sectors under the pandemic.
                      <br />
                      Sales figures during the past years have witnessed a
                      steady increase, reaching their peak during the last two
                      years, in which real estate sales in general and
                      apartments in particular witnessed unprecedented sales,
                      both internally and externally, which made Turkey a strong
                      competitor in the real estate market in developed
                      countries.
                    </Typography>
                  </Typography>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    {" "}
                    Table Of Contents
                  </Typography>
                  <Typography color="primary">
                    <ul>
                      <li>
                        A record rise in the investment value of Turkish
                        apartments over the past two years
                      </li>
                      <li style={{ marginInline: "20px" }}>
                        Residential apartments outperform foreign currencies in
                        increasing the investment value
                      </li>
                      <li style={{ marginInline: "20px" }}>
                        The total return on apartments exceeded 150% in two
                        years
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    A record rise in the investment value of Turkish apartments
                    over the past two years
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    According to a report prepared by the Turkish real estate
                    platform Endeksa, apartments in Turkey recorded an increase
                    in their investment value of 63% during the past year and
                    132% during the last two years.
                  </Typography>

                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    <span
                      color="primary"
                      style={{
                        color: "#9c344c",
                        margin: "0px 5px 0px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Antalya
                    </span>
                    topped the Turkish states that witnessed the largest
                    increase in the investment value of its apartments, with an
                    increase of 78% in 2021, and 178% during the past two years.
                    Istanbul came in second place with an increase of 75% during
                    the past year and 122% during the last two years, while
                    Bursa ranked third, with an increase of 56% over the past
                    year and 103% over the past two years.
                    <br />
                    <br />
                    The figures for the increase in the investment value of
                    residential apartments in Turkey and its five major states
                    were as follows:
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell style={{ fontWeight: "bold" }}>
                            Rank
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            State
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2021
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2020 & 2021
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.calories}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.fat}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.carbs}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    Residential apartments outperform foreign currencies in
                    increasing the investment value
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    The aforementioned report included a comparison between the
                    increase in the investment value of residential apartments
                    and the increase in foreign exchange rates against the
                    Turkish lira over the past two years. As the apartments
                    outperformed by an increase of 132% over the dollar, which
                    increased by only 97% during the same period, as well as the
                    euro, which increased by 102% against the Turkish lira
                    during the past two years, as well as the pound sterling,
                    which increased by an increase against the lira Turkish
                    121%.
                  </Typography>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/uploads/news/image_1643725810_5ojgJ2LHi527BqTTQA79cR2dmLo4sJzP9dqrqcug.jpeg"
                    alt="Img"
                  />
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/uploads/news/image_1643725814_CjIm9ineGWA58wEg3HJ1SWPrS22haUWYyfegJ8Us.jpeg"
                    alt="Img"
                  />
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    The figures for the increases in foreign exchange rates
                    against the Turkish lira in the report are as follows:
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell style={{ fontWeight: "bold" }}>
                            Currency
                          </StyledTableCell>

                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            The increase against the Turkish lira during 2021
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            The increase against the Turkish lira during 2020 &
                            2021
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                              {row.fat}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.carbs}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography
                    className={classes.Header}
                    style={{
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                      margin: "20px 0px",
                    }}
                    variant="h4"
                  >
                    The total return on apartments exceeded 150% in two years
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      fontSize: "16px",
                      textAlign: `${i18n.language == "ar" ? "right" : "left"}`,
                    }}
                  >
                    The total investment return for apartments in Turkey has
                    reached 71% over the past year and 151% over the past two
                    years, according to a report by Endeksa real estate
                    platform.
                    <br />
                    <br />
                    Antalya also topped the Turkish states in the percentage of
                    total investment return for apartments, with a total return
                    of 86% during the year 2021, and 197% during the two years
                    2020 and 2021. Followed by{" "}
                    <span
                      color="primary"
                      style={{
                        color: "#9c344c",
                        margin: "0px 5px 0px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Istanbul
                    </span>{" "}
                    in second place, with a total return of 83% during the last
                    year and 139% during the last two years, and Brusa came in
                    third place with a total return of 63% during the past year
                    and 118% during the past two years.
                    <br />
                    <br />
                    The figures for the total return of apartments in Turkey and
                    its five major states were as follows:
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell style={{ fontWeight: "bold" }}>
                            Rank
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            State
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2021
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                          >
                            Increasing the investment value of apartments during
                            2020 & 2021
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.calories}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.fat}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.carbs}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box
                    style={{
                      marginBlock: "35px",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      Edited by{" "}
                      <Typography
                        style={{
                          fontWeight: "bold",
                          marginInline: "10px",
                        }}
                      >
                        Imtilak Real Estate©
                        <br />
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBlock: "16px",
                      }}
                    >
                      Reference:{" "}
                      <Typography
                        color="primary"
                        style={{
                          fontWeight: "bold",
                          marginInline: "10px",
                        }}
                      >
                        Endeksa
                        <br />
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Did you like this topic? You can share it with your
                      friends now.
                      <br />
                    </Typography>
                    <Box>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBlock: "20px",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div class="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                    <Typography
                      className={classes.Header}
                      style={{
                        textAlign: `${
                          i18n.language == "ar" ? "right" : "left"
                        }`,
                        margin: "30px 0px",
                        fontSize: "23px",
                      }}
                      variant="h3"
                    >
                      Tags{" "}
                    </Typography>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>{" "}
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
              <Grid
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  padding: "20px",
                  gap: "10px 10px",
                }}
              >
                <div>
                  <Card
                    variant="outlined"
                    style={{
                      borderRadius: "10px",
                      height: "500px",
                      margin: "0 10px",
                    }}
                  >
                    <Box className={classes.boxImage}>
                      <span className={classes.span}>New</span>
                      <Typography className={classes.parag} variant="h5">
                        <Typography style={{ fontSize: "16px" }}>
                          Important articles
                        </Typography>
                        An exclusive interview with the CEO of Imtilak Real
                        Estate about the rise in real estate prices in Turkey
                      </Typography>
                    </Box>
                  </Card>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      margin: "0px 10px 20px 10px",
                      width: "300px",
                      flexGrow: 1,
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
                            fontSize: "1rem",
                            fontWeight: "bold",
                            padding: "5px",
                          }}
                          className={classes.hover}
                        >
                          Ankara real estate records an unprecedented increase
                          in foreign sales in 2021
                        </Typography>
                        <Typography
                          style={{
                            margin: "10px 10px 20px 10px",
                            fontSize: "1rem",
                            fontWeight: "",
                            color: "#37404d",
                          }}
                        >
                          Apartment sales to foreigners in Ankara increased by
                          50.3% compared to real estate sales for the past year
                          2021.
                        </Typography>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "15px",
                          }}
                        >
                          <Typography
                            style={{
                              display: "flex",
                              fontSize: "14px",
                              color: "#5f6670",
                              alignItems: "center",
                            }}
                          >
                            <EventAvailableIcon
                              size="small"
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                marginInline: "5px",
                              }}
                            />
                            2022-02-22
                          </Typography>
                          <Typography
                            style={{
                              display: "flex",
                              fontSize: "14px",
                              color: "#5f6670",
                              alignItems: "center",
                            }}
                          >
                            <VisibilityIcon
                              size="small"
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                marginInline: "5px",
                              }}
                            />
                            548
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </div>

                  <div
                    style={{
                      margin: "0px 10px 20px 10px",
                      width: "300px",
                      flexGrow: 1,
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
                            fontSize: "1rem",
                            fontWeight: "bold",
                            padding: "5px",
                          }}
                          className={classes.hover}
                        >
                          Ankara real estate records an unprecedented increase
                          in foreign sales in 2021
                        </Typography>
                        <Typography
                          style={{
                            margin: "10px 10px 20px 10px",
                            fontSize: "1rem",
                            fontWeight: "",
                            color: "#37404d",
                          }}
                        >
                          Apartment sales to foreigners in Ankara increased by
                          50.3% compared to real estate sales for the past year
                          2021.
                        </Typography>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "15px",
                          }}
                        >
                          <Typography
                            style={{
                              display: "flex",
                              fontSize: "14px",
                              color: "#5f6670",
                              alignItems: "center",
                            }}
                          >
                            <EventAvailableIcon
                              size="small"
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                marginInline: "5px",
                              }}
                            />
                            2022-02-22
                          </Typography>
                          <Typography
                            style={{
                              display: "flex",
                              fontSize: "14px",
                              color: "#5f6670",
                              alignItems: "center",
                            }}
                          >
                            <VisibilityIcon
                              size="small"
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                marginInline: "5px",
                              }}
                            />
                            548
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </div>
                </div>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Index;
