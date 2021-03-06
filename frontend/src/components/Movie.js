import React from 'react';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
});

const Movie = props => {
  const movie = props.movie;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <div className="info">
          {movie.description}
          <span className="date">
            {new Date(movie.createdAt).toDateString()}
          </span>
        </div>

      </div>

    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(Movie);
