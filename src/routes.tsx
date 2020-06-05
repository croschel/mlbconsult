import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Consult from './pages/Consult';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/consult" component={Consult} />
    </BrowserRouter>
  );
}

export default Routes;