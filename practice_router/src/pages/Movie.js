import React from 'react';
import { getMovies } from '../movie_data';
import { Link } from 'react-router-dom';

const Movie = () => {
  const movies = getMovies();

  return (
    <div>
      <h1>영화 상세페이지</h1>
      <div>
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ display: 'black' }}
          >
            {movie.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movie;
