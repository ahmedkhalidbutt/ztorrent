import React from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default () => {
    const {slug} = useParams()
    const movie = useSelector(state => state.movies.data.filter(movie => movie.slug === slug))
	return <Grid container>
        <Grid item>
            <pre> {JSON.stringify(movie[0], null, 2)} </pre>
        </Grid>
    </Grid>;
};
