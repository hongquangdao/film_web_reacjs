import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' element={<Trending />}  />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
