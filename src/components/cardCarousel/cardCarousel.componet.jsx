import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
// import { makeStyles } from "@material-ui/core";
// import { Grid } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//     carousel: {
//         height: '60vh !important'
//     }
// }))

const CardCarousel = () => {
	// const classes = useStyles();
	const movies = useSelector((state) => state.movies.data);
	return (
		<Carousel 
			className="card-carousel"
			showThumbs={false} 
			infiniteLoop 
			showArrows
			centerMode
			showIndicators={false}
			selectedItem={10}
			centerSlidePercentage={20}>
			{movies.map((movie) => (
				<div key={movie.id}>
					<img src={movie.medium_cover_image} alt={movie.title}  />
				</div>
			))}
		</Carousel>
	);
};

export default CardCarousel;
