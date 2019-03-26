import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  render() {
    const { tasks } = this.props;

    const taskList = tasks.length ? (
      tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            markComplete={this.props.markComplete}
            handleExpand={this.props.handleExpand}
          />
        );
      })
    ) : (
      <p>No tasks</p>
    );

    return <ul className="list-group">{taskList}</ul>;
  }
}

export default TaskList;
