import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/movieCard.component'
import Grid from '@material-ui/core/Grid';

export const MoviesList = () => {
    const movies = useSelector(state => state.movies.data)
    console.log('====================================');
    console.log(movies);
    console.log('====================================');
    return(
        <Grid container>
            {movies.map(movie => <Grid item sm={4} key={movie.id}>
                <MovieCard data={movie} />
            </Grid>)}
            
        </Grid>
    )
}