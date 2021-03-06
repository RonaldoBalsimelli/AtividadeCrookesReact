import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header/index'
import Footer from './Components/Footer/index'


import Routes from './Routes'

import './App.css';

function App() {

  return (

    <BrowserRouter>
      <Header />

      <Routes />

      <Footer />
      </BrowserRouter> 
  );
}

export default App;