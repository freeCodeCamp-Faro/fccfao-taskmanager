import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TaskList from '../views/TaskList';
import About from '../views/About';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
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
        <Switch>
          <Route path="/" component={TaskList} exact />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
