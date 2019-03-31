import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AppHome from '../components/AppHome';
import AppAbout from '../components/AppAbout';
import Test from '../components/Test';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Route exact path="/" component={AppHome} />
          <Route path="/about" component={AppAbout} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
