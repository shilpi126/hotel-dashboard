import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login';

function App() {
  return (
      
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
