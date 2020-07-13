import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "../../redux/actions/moviesActions";
import { MoviesList } from "../moviesList/moviesList.component";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
  render() {
    return (
      <Fragment>
        <MoviesList/>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default connect(mapStateToProps)(Home);
