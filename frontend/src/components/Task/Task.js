import React, { Fragment } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

const Task = ({ task, handleExpand, markComplete }) => {
  const renderInfo = () => {
    if (task.expand) {
      return (
        <Fragment>
          <div>
            <p>{task.description}</p>
            <p className="text-muted">Due Date: </p>
            <p> {task.date}</p>
            <p className="text-muted">Labels: </p>
            <p> {task.label}</p>
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

  return (
    <li className="list-group-item mb-2">
      <div className="d-flex justify-content-between align-middle">
        <div
          className="w-100 d-inline-flex"
          onClick={() => handleExpand(task.id)}
        >
          <div className={`priority ${task.priority} mr-2`} />
          <h6 className="ellipsis">{task.title}</h6>
        </div>
        <input
          type="checkbox"
          className="float-right checkbox"
          onChange={() => markComplete(task.id)}
        />
      </div>

      {renderInfo()}
    </li>
  );
};
export default Task;
