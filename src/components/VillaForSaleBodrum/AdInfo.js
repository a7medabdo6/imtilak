import React from "react";
// MUI Component
import { Box, Container, Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import AdInfoRow from "./AdInfoRow";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  backBlock: {
    display: "flex",
    flexGrow: 1,
    borderRadius: "8px",
    border: "1px solid #c5c5c5",
    background: "#fff",
    marginTop: "20px",
  },
  big__container: {
    position: "relative",
    paddingBottom: "25px",
    width: "100%",
  },

  title: {
    padding: "15px 0",
    fontWeight: 700,
    marginBottom: "1.5rem",
    fontSize: "1.25rem",
    color: theme.palette.primary.main,
  },
}));

function Index(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.backBlock}>
      <Container maxWidth="lg" className={classes.big__container}>
        <Typography
          align={`${i18n.language == "ar" ? "right" : "left"}`}
          className={classes.title}
          variant="h4"
        >
          Bodrum Region Report
        </Typography>

        <AdInfoRow label="Ad No." value="1643458358" />
        <AdInfoRow label="Price" value="4,350,000 TL" />
        <AdInfoRow label="Ad Date" value="29, Jan 2022" />
        <AdInfoRow label="Property Type" value="Villa" />
        <AdInfoRow label="Net Rental Income" value="15000 TL" />
        <AdInfoRow label="Total Area" value="320 m²" />
        <AdInfoRow label="Net Area" value="300 m²" />
        <AdInfoRow label="Land Area" value="320 m²" />
        <AdInfoRow label="Number Of Bathrooms" value="2" />
        <AdInfoRow label="Floor Number" value="Type: Villa" />
        <AdInfoRow label="Age Of The Building" value="Between 11-15" />
        <AdInfoRow label="State Of The Property" value="available" />
        <AdInfoRow label="Exchangeable" value="no" />
        <AdInfoRow label="Suitable For Bank Loan" value="yes" />
        <AdInfoRow label="Balcony" value="yes" />
        <AdInfoRow
          label="Title Deed Status"
          value="Condominium Title Deed"
          hasDivider={false}
        />
      </Container>
    </div>
  );
}

export default Index;
