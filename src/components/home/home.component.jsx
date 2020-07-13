import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "../../redux/actions/moviesActions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
  render() {
    console.log(this.props.movies.data);
    return <Fragment></Fragment>;
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default connect(mapStateToProps)(Home);
