import React, { Component } from 'react';

export default class Task extends Component {
  getStyle = () => {
    return {
      background: this.props.task.priority,
      borderRadius: '50%',
      height: ' 25px',
      width: '25px'
    };
  };

  render() {
    const { id, title, expand, description, date, label } = this.props.task;
    const ellipsis = {
      display: 'inline-block',
      width: '80%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer'
    };
    if (expand === false) {
      return (
        <div>
          <li className="list-group-item d-flex justify-content-between mb-2">
            <div style={this.getStyle()} />
            <span
              style={ellipsis}
              onClick={this.props.handleExpand.bind(this, id)}
            >
              {title}
            </span>
            <input
              type="checkbox"
              className="float-right checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li className="list-group-item mb-2 ">
            <div className="d-flex justify-content-between mb-2">
              <div style={this.getStyle()} />
              <span
                style={ellipsis}
                onClick={this.props.handleExpand.bind(this, id)}
              >
                {title}
              </span>
              <input
                type="checkbox"
                className="float-right checkbox"
                onChange={this.props.markComplete.bind(this, id)}
              />
            </div>
            <div>
              <p>{description}</p>
              <p>Due Date: </p>
              <p> {date}</p>
              <p>Labels: </p>
              <p> {label}</p>
            </div>
            <button> Edit</button>
            <button> Delete</button>
          </li>
        </div>
      );
    }
  }
}
