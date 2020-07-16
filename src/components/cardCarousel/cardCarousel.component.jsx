import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector } from "react-redux";
import "./cardCarousel.styles.css";
import Slider from "../@bit/akiran.react-slick.slider";
import Image from 'material-ui-image';
import { useHistory } from "react-router-dom";

const CardCarousel = () => {
  const movies = useSelector((state) => state.movies.data);
  let history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const handleClick = (slug) => {
    history.push(`/movie/${slug}`)
  }

  let moviesDiv = movies.map((movie) => (
      <Image
        disableSpinner
        onClick={() => handleClick(movie.slug)}
        src={movie.medium_cover_image}
        aspectRatio={9/16}
      />
  ));
  return (
    <div className="carousel-container">
      <h1>Latest Movies</h1>
      <Slider {...settings}>{moviesDiv}</Slider>
    </div>
  );
};



export default CardCarousel;
