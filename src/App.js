import React from 'react';
<<<<<<< HEAD
import IndiaMap from './Mycomponants/IndiaMap';
=======
>>>>>>> 8098624192f6b82bec66650116e01e9b714b6c4f
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import StateMap from './Mycomponants/StateMap'
import {Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
     <Routes>
        <Route exact path="/" element={<IndiaMap/>}/>
        <Route exact path="/StateRoute/:id" element={<StateMap/>}/>
    </Routes>
    </>
  )
}

export default App;