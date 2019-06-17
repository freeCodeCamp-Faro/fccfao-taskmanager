import React, { Component } from 'react';

import axios from 'axios';

import Task from '../components/Task/Task';
import TaskModal from '../components/TaskModal';

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
    return (
      <div>
        <ul className="list-group">{this.renderTasks(this.props.tasks)}</ul>
        <TaskModal />
      </div>
    );
  }
}

export default TaskList;
