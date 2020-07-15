import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieCover from "../movieCover/moviecover.component";

export const MovieDetail =  () => {
    //TODO check re rendering of this component
    const {slug} = useParams()
    const movie = useSelector(state => state.movies.data.filter(movie => movie.slug === slug))
	return (
        <Fragment>
            <MovieCover {...movie[0]}/>
        </Fragment>
    );
};
