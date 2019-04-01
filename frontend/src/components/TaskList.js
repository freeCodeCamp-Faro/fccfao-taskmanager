import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  componentDidMount() {
    //here be fetch
  }

  renderTasks = tasks => {
    if (tasks.length > 0) {
      return tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            markComplete={this.props.markComplete}
            handleExpand={this.props.handleExpand}
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
