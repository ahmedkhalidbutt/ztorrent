import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "../../redux/actions/moviesActions";
import { MoviesList } from "../moviesList/moviesList.component";
import { Grid, Typography } from "@material-ui/core";

class Home extends Component {
	componentDidMount() {
		this.props.dispatch(fetchMovies());
	}
	render() {
		return (
			<Grid container>
				<Grid item sm={12}>
					<Typography variant="h3" style={{textAlign: 'center'}} >LATEST</Typography>
				</Grid>
				<Grid item style={{ width: "1240px", margin: "0 auto" }}>
					<MoviesList />
				</Grid>
			</Grid>
		);
	}
}
const mapStateToProps = (state) => ({
	movies: state.movies,
});
export default connect(mapStateToProps)(Home);
