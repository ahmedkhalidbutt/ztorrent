import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { makeStyles } from "@material-ui/core";
// import { Grid } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//     carousel: {
//         height: '60vh !important'
//     }
// }))

export default () => { 
    // const classes = useStyles();                                                                                             
    		return (
			<Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} >
				<div>
					<img src="https://yts.mx/assets/images/movies/templar_nation_2013/large-cover.jpg" />
				</div>
				<div>
					<img src="https://yts.mx/assets/images/movies/templar_nation_2013/large-cover.jpg" />
				</div>
			</Carousel>
		);
}
