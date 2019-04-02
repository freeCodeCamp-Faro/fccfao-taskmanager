import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TaskFormPriority = props => {
  return (
    <div>
      <FormGroup>
        <Label for="task-priority-select">Priority</Label>
        <Input type="select" name="select" id="task-priority-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    </div>
  );
};

export default TaskFormPriority;
