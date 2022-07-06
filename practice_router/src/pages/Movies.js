import React from 'react';
import { getMovies } from '../movie_data';
import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
  const movies = getMovies();

  return (
    <div>
      <h1>영화 상세페이지</h1>
      <div>
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ display: 'block', marginTop: '10px' }}
          >
            {movie.title}
          </Link>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Movies;
