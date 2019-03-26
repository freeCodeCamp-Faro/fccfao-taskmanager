import React, { Component } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

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
            <h6
              style={ellipsis}
              onClick={this.props.handleExpand.bind(this, id)}
            >
              {title}
            </h6>
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
          <li className="list-group-item mb-2">
            <div className="d-flex justify-content-between mb-2">
              <div style={this.getStyle()} />
              <h6
                style={ellipsis}
                onClick={this.props.handleExpand.bind(this, id)}
              >
                {title}
              </h6>
              <input
                type="checkbox"
                className="float-right checkbox"
                onChange={this.props.markComplete.bind(this, id)}
              />
            </div>
            <div>
              <p>{description}</p>
              <p className="text-muted">Due Date: </p>
              <p> {date}</p>
              <p className="text-muted">Labels: </p>
              <p> {label}</p>
            </div>
            <div className="text-right">
              <button className="btn-round btn-green mr-2">
                {' '}
                <FaPen />
              </button>
              <button className="btn-round btn-red">
                {' '}
                <FaTrashAlt />
              </button>
            </div>
          </li>
        </div>
      );
    }
  }
}
