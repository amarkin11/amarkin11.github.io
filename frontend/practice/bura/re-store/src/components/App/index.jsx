import React, { Component } from 'react';

import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';

import CartPage from '../Pages/Cart';
import HomePage from '../Pages/Home';

import Header from '../Header';

import './index.scss';

export default class App extends Component {

  render() {

    return (
      <HashRouter>
        <main className='content container'>
          <Header />
          <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='/cart' element={ <CartPage /> }/>
            <Route path='*' element={ <h2>This page not found!</h2> }/>
          </Routes>
        </main>
      </HashRouter>
    )
  };
};
