import React, { Fragment, Component } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

export default class Task extends Component {
  renderInfo = () => {
    const { expand, description, date, label } = this.props.task;

    if (expand) {
      return (
        <Fragment>
          <div>
            <p>{description}</p>
            <p className="text-muted">Due Date: </p>
            <p> {date}</p>
            <p className="text-muted">Labels: </p>
            <p> {label}</p>
          </div>
          <div className="text-right">
            <button className="btn-round btn-green mr-2">
              <FaPen />
            </button>
            <button className="btn-round btn-red">
              <FaTrashAlt />
            </button>
          </div>
        </Fragment>
      );
    }
  };

  render() {
    const { id, priority } = this.props.task;

    return (
      <li className="list-group-item mb-2">
        <div className="d-flex justify-content-between align-middle">
          <div
            className="w-100 d-inline-flex"
            onClick={this.props.handleExpand.bind(this, id)}
          >
            <div className={`priority ${priority} mr-2`} />
            <h6 className="ellipsis">{this.props.task.title}</h6>
          </div>
          <input
            type="checkbox"
            className="float-right checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
        </div>

        {this.renderInfo()}
      </li>
    );
  }
}
