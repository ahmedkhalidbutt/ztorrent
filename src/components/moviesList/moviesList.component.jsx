import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/movieCard.component'
import Grid from '@material-ui/core/Grid';

export default ({limit}) => {
    const movies = useSelector(state => state.movies.data)
    return(
        <Grid container style={{width: '80%', margin: '0 auto'}}>
            {movies.slice(0, limit ?? movies.length).map(movie => <Grid item sm={3} key={movie.id}>
                <MovieCard data={movie} />
            </Grid>)}
            
        </Grid>
    )
}