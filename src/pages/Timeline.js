/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
// MUI Component
import Grid from "@material-ui/core/Grid";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTranslation } from "react-i18next";

function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const { t, i18n } = useTranslation();

  return (
    <>
      <li>
        <div class="timeline-badge  warning">
          <i class="glyphicon glyphicon-check"></i>
        </div>

        <div class="timeline-panel">
          <div class="timeline-heading">
            <h2 class="timeline-title h5">
              Interview for the group manager of Imtilak Real Estate with the
              Financial Times
            </h2>
          </div>

          <div class="timeline-body">
            <p>
              An exclusive interview by the British Financial Times With Mr.
              Abdullah Al-Hammad
            </p>
            <a href="#" class="btn btn-white">
              Read more
            </a>
          </div>
        </div>

        <div class="timeline-date">
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginInline: "12px",
            }}
          >
            <DateRangeIcon />

            <span>13, Feb 2020</span>
          </p>
        </div>
      </li>

      <li>
        <div class="timeline-badge ">
          <i class="glyphicon glyphicon-check"></i>
        </div>

        <div class="timeline-panel">
          <div class="timeline-heading">
            <h2 class="timeline-title h5">
              Company's annual honoring ceremony Imtilak Real Estate 2020
            </h2>
          </div>

          <div class="timeline-body">
            <p>
              Annual honoring ceremony forImtilak Real Estate 2020, It was
              attended by more than 200 members of Imtilak group
            </p>
            <a data-fancybox="video" href="#" class="btn btn-transparent">
              Watch the video
            </a>
          </div>
        </div>

        <div
          class="timeline-date"
          style={{ right: `${i18n.language == "ar" ? "50%" : "30%"}` }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginInline: "12px",
            }}
          >
            <DateRangeIcon />

            <span>13, Feb 2020</span>
          </p>
        </div>
      </li>
    </>
  );
}

export default Index;
