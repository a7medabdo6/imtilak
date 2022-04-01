import React from "react";
import Hero from "../components/Carosoul";
import Projects from "../components/Projects/index";
import Testimonials from "../components/Testimonial/index";
import Channel from "../components/Channel/index";
import Blog from "../components/Blog/index";
import Gallery from "../components/Gallery/index";
import Services from "../components/Services/index";
import Story from "../components/Story/index";

function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Projects />
      <Blog />

      <Testimonials />
      <Channel />
      <Gallery />
      <Services />
    </>
  );
}

export default Home;
