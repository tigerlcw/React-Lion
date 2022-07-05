import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Menubar from './pages/Menubar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        {/* 루트 주소 - 메뉴바 */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
