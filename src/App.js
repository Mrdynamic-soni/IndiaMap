import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import Imsvg from './Icons/Imsvg';
import Upsvg from './Icons/Upsvg'
import {Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
     <Routes>
        <Route exact path="/" element={<Imsvg/>}/>
        <Route exact path="/StateRoute" element={<Upsvg/>}/>
    </Routes>
    </>
  )
}

export default App;