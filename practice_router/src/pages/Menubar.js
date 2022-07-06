import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Menubar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Outlet />
      <button onClick={goHome} type="button">
        Main Menu
      </button>
    </div>
  );
};

export default Menubar;
