import React from "react";
// MUI Components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import PriceSlider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
// Local Components
import Dropdown from "./dropdown";
import Slider from "./Slider";
import DarkBtn from "../common/DarkBtn";

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
  margin: {
    margin: "0px 20px 0px 2px",
  },
  BlockStyle: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
}));

export default function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1000px)");

  const classes = useStyles();
  const [value, setValue] = React.useState([0, 300]);

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0 m",
    },

    {
      value: 300,
      label: "300 m",
    },
  ];

  return (
    <>
      <div className={classes.root}>
        {isDesktop ? (
          <>
            {/* Left Search */}
            <Grid container xs={3} md={3}>
              <Card className={classes.margin}>
                <Box className={classes.padding}>
                  <Typography variant="h5">
                    Search for your apartment
                  </Typography>

                  <Dropdown
                    data={["Turky", "Istamboul", "Egypt"]}
                    label="Choose a city"
                  />

                  <Dropdown
                    data={["Turky", "Istamboul", "Egypt"]}
                    label="Choose a city"
                  />

                  <Dropdown
                    data={["Turky", "Istamboul", "Egypt"]}
                    label="Choose a city"
                  />

                  <Dropdown
                    data={["Turky", "Istamboul", "Egypt"]}
                    label="Choose a city"
                  />

                  <Box style={{ margin: "8px", marginTop: "10px" }}>
                    <Typography>Space</Typography>
                    <PriceSlider
                      value={value}
                      onChange={handlePriceChange}
                      valueLabelDisplay="on"
                      aria-labelledby="range-slider"
                      //getAriaValueText={valuetext}
                      marks={marks}
                      min={0}
                      max={300}
                    />
                  </Box>

                  <Box style={{ margin: "8px", marginTop: "10px" }}>
                    <Typography>Price</Typography>
                    <PriceSlider
                      value={value}
                      onChange={handlePriceChange}
                      valueLabelDisplay="on"
                      aria-labelledby="range-slider"
                      //getAriaValueText={valuetext}
                      marks={marks}
                      min={0}
                      max={300}
                    />
                  </Box>

                  <DarkBtn text="Search" />
                </Box>
              </Card>
            </Grid>
            {/* Slider & Buttom */}
            <Grid item xs={12} md={9}>
              <Slider />

              {/* Down Blocks */}
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  columnGap: "15px",
                }}
              >
                {/* BLock */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <Box
                    className={classes.BlockStyle}
                    borderColor="#c5c5c5"
                    borderRadius={10}
                    border={1}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "25px",
                        display: "inline-block",
                      }}
                    >
                      Imtilak Blog
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        marginTop: "10px !important",
                        display: "inline-block",
                      }}
                    >
                      Turkey And Real Estate News
                    </Typography>
                    <Button
                      variant="contained"
                      style={{ margin: "30px " }}
                      color="primary"
                    >
                      Primary
                    </Button>
                  </Box>
                </Grid>

                {/* BLock */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <Box
                    className={classes.BlockStyle}
                    borderColor="#c5c5c5"
                    borderRadius={10}
                    border={1}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "25px",
                        display: "inline-block",
                      }}
                    >
                      Imtilak Blog
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        marginTop: "10px !important",
                        display: "inline-block",
                      }}
                    >
                      Turkey And Real Estate News
                    </Typography>
                    <Link to="ownership-turkey">
                      <Button
                        variant="contained"
                        style={{ margin: "30px " }}
                        color="primary"
                      >
                        Primary
                      </Button>
                    </Link>
                  </Box>
                </Grid>

                {/* BLock */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <Box
                    className={classes.BlockStyle}
                    borderColor="#c5c5c5"
                    borderRadius={10}
                    border={1}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "25px",
                        display: "inline-block",
                      }}
                    >
                      Imtilak Blog
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        marginTop: "10px !important",
                        display: "inline-block",
                      }}
                    >
                      Turkey And Real Estate News
                    </Typography>
                    <Link to="ownership-turkey">
                      <Button
                        variant="contained"
                        style={{ margin: "30px " }}
                        color="primary"
                      >
                        Primary
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Slider />

              {/* Down Blocks */}
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  columnGap: "15px",
                  rowGap: "15px",
                  flexWrap: "wrap",
                  marginTop: "30px",
                }}
              >
                {/* BLock */}
                <Grid item xs={12} style={{}}>
                  <Box
                    className={classes.BlockStyle}
                    borderColor="#c5c5c5"
                    borderRadius={10}
                    border={1}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "25px",
                        display: "inline-block",
                      }}
                    >
                      Imtilak Blog
                    </Typography>

                    <Typography
                      variant="p"
                      style={{
                        marginTop: "10px !important",
                        display: "inline-block",
                      }}
                    >
                      Turkey And Real Estate News
                    </Typography>
                    <Link to="ownership-turkey">
                      <Button
                        variant="contained"
                        style={{
                          margin: "10px -10px 10px -10px",
                          flexGrow: 1,
                          width: "90%",
                        }}
                        color="primary"
                      >
                        Primary
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                {/* BLock */}
                <Grid item xs={12} style={{}}>
                  <Box
                    className={classes.BlockStyle}
                    borderColor="#c5c5c5"
                    borderRadius={10}
                    border={1}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "25px",
                        display: "inline-block",
                      }}
                    >
                      Imtilak Blog
                    </Typography>

                    <Typography
                      variant="p"
                      style={{
                        marginTop: "10px !important",
                        display: "inline-block",
                      }}
                    >
                      Turkey And Real Estate News
                    </Typography>

                    <Button
                      variant="contained"
                      style={{
                        margin: "10px -10px 10px -10px",
                        flexGrow: 1,
                        width: "90%",
                      }}
                      color="primary"
                    >
                      Primary
                    </Button>
                  </Box>
                </Grid>

                {/* BLock */}
                <Grid item xs={12} style={{}}>
                  <Box
                    className={classes.BlockStyle}
                    borderColor="#c5c5c5"
                    borderRadius={10}
                    border={1}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "25px",
                        display: "inline-block",
                      }}
                    >
                      Imtilak Blog
                    </Typography>

                    <Typography
                      variant="p"
                      style={{
                        marginTop: "10px !important",
                        display: "inline-block",
                      }}
                    >
                      Turkey And Real Estate News
                    </Typography>

                    <Button
                      variant="contained"
                      style={{
                        margin: "10px -10px 10px -10px",
                        flexGrow: 1,
                        width: "90%",
                      }}
                      color="primary"
                    >
                      Primary
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </>
  );
}
