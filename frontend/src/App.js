import React, { Component } from 'react';
import './App.css';

import TaskList from './components/TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'do laundry do laundry do laundry do laundry do laundry ',
        description:
          'Lorem ipsum dolor sit amet, consectetur ex adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        date: '23 - September - 2017',
        label: 'design',
        priority: 'high',
        completed: false,
        expand: false
      },
      {
        id: 2,
        title: 'buy milk',
        description:
          'Lorem ipsum dolor sit amet, consectetur ex adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        date: '23 - September - 2017',
        label: 'design',
        priority: 'medium',
        completed: false,
        expand: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    });
  };

  handleExpand = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.expand = !task.expand;
          console.log(task);
        } else {
          task.expand = false;
        }
        return task;
      })
    });
  };

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-xs-10 col-md-8 mx-auto">
            <p>Hello World!</p>
            <TaskList
              tasks={this.state.tasks}
              markComplete={this.markComplete}
              handleExpand={this.handleExpand}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
