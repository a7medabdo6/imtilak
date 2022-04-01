import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "react-multi-carousel/lib/styles.css";
// Styles
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// Import Swiper styles
import "swiper/css";

import ClickableChip from "../common/ClickableChip";

const useStyles = makeStyles((theme) => ({
  backBlock: {
    borderRadius: "8px",
    border: "1px solid #c5c5c5",
    background: "#fff",
    marginTop: "20px",
  },
  big__container: {
    position: "relative",
  },
}));

const handleClick = () => {
  console.info("You clicked the Chip.");
};

function Slider() {
  const classes = useStyles();

  return (
    <div className={classes.backBlock}>
      <Container maxWidth="lg" className={classes.big__container}>
        {/*<Swiper
          slidesPerView={20}
          // centeredSlides={true}
          spaceBetween={90}
          grabCursor={true}
          pagination={false}
          className="mySwiper"
        >


          {[
            "Let's Discover!",
            'Turkish Citizenship',
            'Ankara Real Estate',
            'Istanbul Real Estate',
            'Imtilak services',
            'Apartments in Istanbul',
            'Villas in Istanbul',
            'Villas in Turkey',
            'Antalya Projects'
          ].map(el => <SwiperSlide><ClickableChip
            key={el}
            handleFunc={handleClick}
            chipName={el}
          /></SwiperSlide>)}
        </Swiper>*/}
      </Container>
    </div>
  );
}

export default Slider;
