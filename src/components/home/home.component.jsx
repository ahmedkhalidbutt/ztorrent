import React from "react";
import { useDispatch } from "react-redux";

import { fetchMovies } from "../../redux/actions/moviesActions";
import Carousal from "../carousel/carousel.component";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import CardCarousel from "../cardCarousel/cardCarousel.component";


const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(fetchMovies());
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Grid container className="main">
        <Grid item sm={12}>
          <Carousal />
        </Grid>
      </Grid>
      <CardCarousel />
    </>
  );
};
export default Home;
