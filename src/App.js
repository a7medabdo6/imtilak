import React from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";

// MUI Component
import { Container, Box } from "@material-ui/core";
// Local Component
import Header from "./components/Header";

import Footer from "./components/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Channels from "./pages/Channel";

import Testimonial from "./pages/Testimonial";
import EmploymentApplication from "./pages/EmploymentApplication";
import SpotLights from "./pages/index";
import ForResale from "./components/ForResale/index";
import ForResaleTurkey from "./components/SubTurkey/index";
import OwnershipTurkey from "./components/OwnershipTurkey/Index";
import VillaForSaleBodrum from "./components/VillaForSaleBodrum/Index";
import GalaxyTower from "./components/galaxy-tower/index";
import Citizenship from "./components/citizenship/index";

import HasRealEState from "./pages/HasRealEstate";
import Faq from "./pages/Faq";
import FaqCity from "./pages/FaqCity";
import FreeJobs from "./pages/FreeJobs";
import About from "./pages/AboutUS";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FiltersList from "./components/SubTurkey/FiltersList";
import { useLocation } from "react-router-dom";

function App(props) {
  // const location = useLocation();

  const { t, i18n } = useTranslation();
  const isDesktop = useMediaQuery("(min-width:900px)");
  const pathname = window.location.pathname; //returns the current url minus the domain name
  console.log(pathname, "props.location");

  return (
    <div>
      <div style={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">{<Header />}</Container>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            alignItems: "center",
            display: `${
              pathname == "/for-resale-turkey" && isDesktop ? "flex" : "none"
            }`,
          }}
          justifyContent="center"
          flexDirection="row"
        >
          <FiltersList />
        </Box>
      </div>
      <div style={{ backgroundColor: "#efefef" }} className="main-body">
        <Container
          maxWidth="lg"
          style={{ padding: `${isDesktop ? "16px" : "0px"}` }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spotlights" element={<SpotLights />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route
                path="/employment-application"
                element={<EmploymentApplication />}
              />
              <Route path="/for-resale" element={<ForResale />} />
              <Route path="/has-real-estate" element={<HasRealEState />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/faq-city" element={<FaqCity />} />
              <Route path="/free-jobs" element={<FreeJobs />} />
              <Route path="/about" element={<About />} />
              <Route path="/for-resale-turkey" element={<ForResaleTurkey />} />
              <Route path="/ownership-turkey" element={<OwnershipTurkey />} />
              <Route
                path="/villa-for-sale-bodrum"
                element={<VillaForSaleBodrum />}
              />
              <Route path="/galaxy-tower" element={<GalaxyTower />} />
              <Route path="/Citizenship" element={<Citizenship />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
