import React from 'react';
import { connect } from 'react-redux';
import Movie from './movie';

const MovieList = ({ movies }) => {
    return <>
    {Object.keys(movies).map((id) => {
        return <Movie key={id} movie={movies[id]}/>
        })}
    </>
}

const mapStateToProps = (state) => ({
    movies: state.movies,
});

export default connect(mapStateToProps, () => ({}))(MovieList);