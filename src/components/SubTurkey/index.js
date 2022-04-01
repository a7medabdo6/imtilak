import React from "react";
// MUI Components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// Local Components
import FiltersList from "./FiltersList";
import NeedHelp from "../common/NeedHelp";
import CitizenshipBlock from "../common/CitizenshipBlock";
import PostLike from "./PostLike";
import Content from "./Content/index";
// Common Components
// Style
import "./fixFont.css";
// MUI Hooks
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      {isDesktop ? (
        <>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={2}
          >
            <Grid item xs={4}>
              <NeedHelp />
              <CitizenshipBlock />
            </Grid>

            <Grid item xs={8}>
              <PostLike />
              <Content />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <PostLike />
            <Content />
            <NeedHelp />
          </Grid>
        </>
      )}
    </div>
  );
}

export default Index;
