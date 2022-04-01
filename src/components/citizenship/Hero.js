import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  TextField,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    margin: "10px 0px",
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#9c344c",
    borderRadius: "8px",
  },

  Header: {
    color: theme.palette.primary.main,
  },
}));
function Hero() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  return (
    <>
      <section class="page-banner section-border">
        <div class="row">
          <Grid container xs={12}>
            <Grid item xs={12} md={5} style={{ display: "flex" }}>
              <div
                class="col-12 col-lg-6 col-xl-5 d-flex flex-column justify-content-center"
                style={{ position: "relative" }}
              >
                <h1 class="banner-head text-capitalize font-weight-bold mx-auto mb-3">
                  Turkish citizenship and how to obtain it
                </h1>
                <p class="info mb-0">
                  Real Estate, Investment, and Turkish Citizenship by Imtilak
                  Real Estate
                </p>
                <img
                  class="banner-decor d-none d-lg-block"
                  src="https://www.imtilak.net/assets/img/turkish-citizenship/arrow-decor.svg"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div
                class="col-12 col-lg-6 col-xl-7 image"
                style={{ position: "relative" }}
              >
                <img
                  src="https://www.imtilak.net/assets/img/turkish-citizenship/turkish-citizenship-header-image.png"
                  alt="Turkish citizenship banner"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <div class="form-contain">
        <div class="contact-form text-center p-4 mb-3" id="contact-form-modal">
          <div class="h5 head font-weight-light">
            Let us contact you to help you
          </div>
          <form
            action="https://www.imtilak.net/en/message"
            method="post"
            class="form-group mt-3 mb-0 contact-message-form"
          >
            <input
              type="text"
              name="name"
              class="custom-input"
              placeholder="Name*"
              aria-label="Name*"
            />
            <div class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-3">
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>egypt</MenuItem>
                  <MenuItem value={20}>egypt</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField id="standard-basic" label="Tele" />
              </FormControl>
            </div>
            <input
              type="email"
              name="email"
              class="custom-input"
              placeholder="E-mail"
              aria-label="E-mail"
            />
            <input
              type="text"
              name="message"
              class="custom-input"
              id="msg"
              placeholder="The desired property specifications"
              aria-label="The desired property specifications"
            />
            <button type="button" class="form-btn mt-4 btn-send-message">
              <span class="send font-weight-bold">Send</span>
              <span class="sending d-none">
                <i class="fa fa-spinner fa-spin fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
