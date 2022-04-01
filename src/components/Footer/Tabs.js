import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  parent: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "20px 0px",
  },
  root: {
    flexGrow: 1,
    display: "flex",

    height: "auto",
    border: "1px solid white",
    borderRadius: "10px",
    margin: "20px 0px",
    backgroundColor: "#7f2a3e",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    padding: "0px",
    height: "70px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "1px solid white",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.parent}>
      <Container>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab className={classes.tab} label="Item One" {...a11yProps(0)} />
            <Tab className={classes.tab} label="Item Two" {...a11yProps(1)} />
            <Tab className={classes.tab} label="Item Three" {...a11yProps(2)} />
            <Tab className={classes.tab} label="Item Four" {...a11yProps(3)} />
            <Tab className={classes.tab} label="Item Five" {...a11yProps(4)} />
          </Tabs>
          <TabPanel value={value} index={0} style={{ width: "100%" }}>
            <ul
              className="list-unstyled tabs mx-0"
              style={{ flexFlow: "row wrap", display: "flex" }}
            >
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/turkey"
                >
                  Properties for Sale in Turkey
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/istanbul"
                >
                  Properties in Istanbul
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/apartments/for-sale/trabzon"
                >
                  Properties for Sale in Trabzon
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/antalya"
                >
                  Properties for Sale in Antalya
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/bursa"
                >
                  Properties for Sale in Bursa
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/yalova"
                >
                  Properties for Sale in Yalova
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/sakarya"
                >
                  Properties for Sale in Sakarya
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/sakarya/sapanca"
                >
                  Properties for Sale in Sapanca
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/sakarya/sapanca"
                >
                  Properties for Sale in Sapanca
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/sakarya/sapanca"
                >
                  Properties for Sale in Sapanca
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/sakarya/sapanca"
                >
                  Properties for Sale in Sapanca
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/properties/for-sale/sakarya/sapanca"
                >
                  Properties for Sale in Sapanca
                </a>
              </li>
            </ul>{" "}
          </TabPanel>
          <TabPanel value={value} index={1} style={{ width: "100%" }}>
            <ul
              className="list-unstyled mx-0"
              style={{ flexFlow: "row wrap", display: "flex" }}
            >
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/real-estate-ownership-turkey"
                >
                  Investment in Turkey
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/tourism-turkey"
                >
                  Turkey's Cities
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/legal-affairs-turkey"
                >
                  Legal affairs
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/questions-answers-ownership-turkey"
                >
                  Ownership in Turkey
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/everything-about-property-deed-turkey"
                >
                  Types of Title Deed in Turkey
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/apartment-prices-in-turkey-in-dinars-and-riyals"
                >
                  Apartment Prices In Turkey
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/how-achieve-high-profits-real-estate-investing"
                >
                  Real Estate Investment in Turkey
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/residence-permit-turkey-buying-property"
                >
                  Residence in Turkey by Buying a Property
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/turkish-citizenship"
                >
                  Obtaining Turkish Citizenship
                </a>
              </li>
              <li>
                <a
                  className="text-capitalize"
                  href="https://www.imtilak.net/en/articles/power-turkish-passport"
                >
                  Power of the Turkish Passport
                </a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={2} style={{ width: "100%" }}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} style={{ width: "100%" }}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4} style={{ width: "100%" }}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5} style={{ width: "100%" }}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6} style={{ width: "100%" }}>
            Item Seven
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}
