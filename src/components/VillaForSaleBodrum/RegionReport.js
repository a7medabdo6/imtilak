import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Local Components
// Common Components
import Dropdown from "../common/LightDropList";
import ImgTwoTypo from "../common/ImgTwoTypo";
import ImgTypo from "../common/ImgTypo";
import ToggleTwo from "../common/ToggleTwo";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    margin: "30px 10px 10px 10px",
  },
  title: {
    fontWeight: 700,
    marginBottom: "1.5rem",
    fontSize: "1.25rem",
    color: theme.palette.primary.main,
  },
  subTitle: {
    fontWeight: 700,
    marginBottom: "1.5rem",
    fontSize: "1rem",
    color: theme.palette.primary.main,
  },
  midSection: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    gap: "10px",
    marginBottom: "10px",
  },
  subMidSection: {
    display: "flex",
    flexFlow: "column wrap",
    flexGrow: 1,
  },
  backBlock: {
    borderRadius: "8px",
    border: "1px solid #c5c5c5",
    background: "#fff",
    margin: "20px 0",
  },
  big__container: {
    position: "relative",
    padding: "25px",
  },
  img: {
    flexShrink: "0",
  },
}));

function SubRegionReport() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.backBlock}>
      <div className={classes.big__container}>
        <div style={{ diplay: "flex" }}>
          <Typography
            align={`${i18n.language == "ar" ? "right" : "left"}`}
            className={classes.title}
            variant="h4"
          >
            Bodrum Region Report
          </Typography>

          <div className={classes.midSection}>
            <div className={classes.subMidSection}>
              <Typography className={classes.subTitle} align="center">
                The most favorite cities for foreign investors
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px 10px",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Dropdown />
                  <Dropdown />
                </div>
              </div>

              <ImgTypo text={"Social status"} img={"./chart.png"} />
            </div>

            <div className={classes.subMidSection}>
              <Typography className={classes.subTitle} align="center">
                The most favorite cities for foreign investors
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px 10px",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Dropdown />
                  <Dropdown />
                </div>
              </div>

              <ImgTypo text={"Social status"} img={"./chart.png"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubRegionReport;
