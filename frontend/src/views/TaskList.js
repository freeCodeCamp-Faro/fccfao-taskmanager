import React, { Component } from 'react';

import axios from 'axios';

import Task from '../components/Task';

class TaskList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    //here be fetch
    axios.get('TasksData.json').then(res => {
      this.setState({
        tasks: res.data.data
      });
    });
  }

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

  renderTasks = tasks => {
    if (this.state.tasks.length > 0) {
      return this.state.tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            markComplete={this.markComplete}
            handleExpand={this.handleExpand}
          />
        );
      });
    }
    return <li>you have no tasks</li>;
  };

  render() {
    return <ul className="list-group">{this.renderTasks(this.props.tasks)}</ul>;
  }
}

export default TaskList;
