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
import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import NeedHelp from "../components/common/NeedHelp";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  boxImage: {
    backgroundImage: "url('https://www.imtilak.net/assets/img/job-img.png')",
    backgroundSize: "cover",
    height: "400px",
    width: "400px",
    backgroundPosition: "center",
    borderRadius: "15px",
    padding: "15px 5px",
    position: "relative",
    border: "unset",
    flexGrow: 1,
  },
  avatar: {},
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
    margin: "0px 10px 10px 10px",
    height: "450px",
    //border: "1px solid gray",
    boxShadow: "unset",
  },
  margin2: {
    margin: "10px 10px",
    height: "400px",
    //border: "1px solid gray",
  },
  marginTop: {
    margin: "5px 0px",
    width: "90%",
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
  input: {
    display: "none",
  },
  Header: {
    color: theme.palette.primary.main,
  },
  backBlock: {
    borderRadius: "8px",
    border: "1px solid #c5c5c5",
    background: "#fff",
    // marginTop: '20px',
  },
}));

function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:970px)");
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
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
            </Grid>

            <Grid item xl={9} md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "20px",
                }}
                className={classes.backBlock}
              >
                <Typography className={classes.Header} variant="h4">
                  Application Form
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    width: "80%",
                  }}
                >
                  <Typography> Application Form</Typography>
                </Typography>
              </Box>

              <Grid
                item
                xl={12}
                md={12}
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  margin: "15px 0px",
                }}
              >
                <Grid item xl={6} md={6}>
                  <Card
                    className={classes.margin}
                    style={{ position: "relative", height: "auto" }}
                  >
                    <Box
                      className={classes.padding}
                      style={{ textAlign: "left" }}
                    >
                      <Typography className={classes.Header} variant="h6">
                        Application Form
                      </Typography>
                      <Typography variant="p">
                        Please fill all fields
                      </Typography>
                      <TextField
                        id="standard-basic"
                        label="Name"
                        className={classes.marginTop}
                        variant="outlined"
                      />
                      <TextField
                        id="standard-basic"
                        label="Telephone Number"
                        className={classes.marginTop}
                        variant="outlined"
                      />
                      <TextField
                        id="standard-basic"
                        label=" E- mail"
                        className={classes.marginTop}
                        variant="outlined"
                      />

                      <TextField
                        id="outlined-select-currency-native"
                        select
                        label=" Choose Department"
                        value={currency}
                        onChange={handleChange}
                        className={classes.marginTop}
                        style={{ width: "90%" }}
                        SelectProps={{
                          native: true,
                        }}
                        variant="outlined"
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                      <TextField
                        id="standard-basic"
                        className={classes.marginTop}
                        variant="outlined"
                        type="file"
                        style={{ width: "90%" }}
                      ></TextField>

                      <TextField
                        id="outlined-multiline-static"
                        label="Cover Letter"
                        multiline
                        style={{ width: "90%" }}
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                      />
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btn}
                        style={{
                          position: "relative",
                          width: "90%",
                          padding: "5px",
                          left: "unset",
                          right: "unset",
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xl={6}
                  md={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    variant="outlined"
                    style={{
                      borderRadius: "10px",
                      margin: "10px",
                      backgroundColor: "white",
                      border: "unset",
                    }}
                  >
                    <Box className={classes.boxImage}></Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "20px",
                }}
                className={classes.backBlock}
              >
                <Typography className={classes.Header} variant="h4">
                  Application Form
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    width: "80%",
                  }}
                >
                  <Typography> Application Form</Typography>
                </Typography>
              </Box>

              <Grid
                item
                xl={12}
                md={12}
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  margin: "15px 0px",
                  flexWrap: "wrap",
                }}
              >
                <Grid item xl={5} md={5}>
                  <Card
                    className={classes.margin}
                    style={{ position: "relative", height: "auto" }}
                  >
                    <Box
                      className={classes.padding}
                      style={{ textAlign: "left" }}
                    >
                      <Typography className={classes.Header} variant="h6">
                        Application Form
                      </Typography>
                      <Typography variant="p">
                        Please fill all fields
                      </Typography>
                      <TextField
                        id="standard-basic"
                        label="Name"
                        className={classes.marginTop}
                        variant="outlined"
                      />
                      <TextField
                        id="standard-basic"
                        label="Telephone Number"
                        className={classes.marginTop}
                        variant="outlined"
                      />
                      <TextField
                        id="standard-basic"
                        label=" E- mail"
                        className={classes.marginTop}
                        variant="outlined"
                      />

                      <TextField
                        id="outlined-select-currency-native"
                        select
                        label=" Choose Department"
                        value={currency}
                        onChange={handleChange}
                        className={classes.marginTop}
                        style={{ width: "90%" }}
                        SelectProps={{
                          native: true,
                        }}
                        variant="outlined"
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                      <TextField
                        id="standard-basic"
                        className={classes.marginTop}
                        variant="outlined"
                        type="file"
                        style={{ width: "90%" }}
                      ></TextField>

                      <TextField
                        id="outlined-multiline-static"
                        label="Cover Letter"
                        multiline
                        style={{ width: "90%" }}
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                      />
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btn}
                        style={{
                          position: "relative",
                          width: "90%",
                          padding: "5px",
                          left: "unset",
                          right: "unset",
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Card>
                </Grid>

                <Grid
                  item
                  xl={5}
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                  }}
                >
                  <Card
                    variant="outlined"
                    style={{
                      borderRadius: "10px",
                      margin: "10px",
                      backgroundColor: "white",
                      border: "unset",
                      display: "flex",
                    }}
                  >
                    <Box className={classes.boxImage}></Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Index;
