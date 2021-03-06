import Movie from './Movie';
import React from 'react';

const MovieList = props => {
  if (!props.movies) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.movies.length === 0) {
    return (
      <div className="article-preview">
      </div>
    );
  }

  return (
    <div>
      {
        props.movies.map(movie => {
          return (
            <Movie movie={movie} key={movie.slug} />
          );
        })
      }

     
    </div>
  );
};

export default MovieList;
