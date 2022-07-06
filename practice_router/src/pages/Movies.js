import React from 'react';
import { getMovies } from '../movie_data';
import { Outlet, NavLink } from 'react-router-dom';

const Movies = () => {
  const movies = getMovies();

  return (
    <div>
      <h1>영화 상세페이지</h1>
      <div>
        {movies.map((movie) => (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : '',
                color: isActive ? '#FF9E1B' : '',
                display: 'block',
                marginTop: '10px',
              };
            }}
          >
            {movie.title}
          </NavLink>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Movies;
