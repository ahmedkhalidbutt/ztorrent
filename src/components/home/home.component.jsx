import React from "react";
import { useDispatch } from "react-redux";

import { fetchMovies } from "../../redux/actions/moviesActions";
import Carousal from "../carousel/carousel.componet";
import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import CardCarousel from "../cardCarousel/cardCarousel.componet";
// import MoviesList from "../moviesList/moviesList.component"

const useStyles = makeStyles((theme) => ({
	main: {
		[theme.breakpoints.up("sm")]: {},
	},
}));

const Home = (props) => {
	const dispatch = useDispatch();
	function fetchData() {
		dispatch(fetchMovies())
	}
	useEffect(() => {
		fetchData()
	}, []);

	const classes = useStyles()

	return (
		<>
			{/* <Typography variant="h3" style={{ textAlign: "center" }}>
					LATEST
				</Typography> */}
			<Grid container className="main">
				<Grid item sm={12}>
					<Carousal />
				</Grid>
			</Grid>
					{/* <MoviesList limit={4} /> */}
				<CardCarousel />

		</>
	);
};
export default Home;
