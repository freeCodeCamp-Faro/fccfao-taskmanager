import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TaskList from '../views/TaskList';
import About from '../views/About';
import Tasks from '../views/Tasks';
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
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={TaskList} exact />
          <Route path="/about" component={About} />
          <Route path="/tasks" component={Tasks} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
