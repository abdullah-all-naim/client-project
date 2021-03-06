import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/' component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
