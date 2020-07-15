import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector } from "react-redux";
import "./cardCarousel.styles.css";
import Slider from "../akiran.react-slick.slider";
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

  const handleClick = ({slug}) => {
    history.push(`/movie/${slug}`)
  }

  let moviesDiv = movies.map((movie) => (
    <div key={movie.id}  onClick = {() => {handleClick(movie)}}>
      <img src={movie.medium_cover_image} alt={movie.title} />
    </div>
  ));
  return (
    <div className="carousel-container">
      <h1>Latest Movies</h1>
      <Slider {...settings}>{moviesDiv}</Slider>
    </div>
  );
};



export default CardCarousel;
