import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./carousel.styles.css";

export default () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img
          alt="main-carousel"
          src="https://yts.mx/assets/images/movies/templar_nation_2013/large-cover.jpg"
        />
      </div>
      <div>
        <img
          alt="main-carousel"
          src="https://yts.mx/assets/images/movies/templar_nation_2013/large-cover.jpg"
        />
      </div>
    </Carousel>
  );
};
