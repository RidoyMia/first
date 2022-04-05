import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dynamic from './components/Dynamic/Dynamic';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:id' element={<Dynamic></Dynamic>}></Route>
      </Routes>
    </div>
  );
};

export default App;