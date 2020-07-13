import React from 'react';
import { useSelector } from 'react-redux';

export const MoviesList = () => {
    const movies = useSelector(state => state.movies.data)
    console.log(movies);
    return(
        <div></div>
    )
}