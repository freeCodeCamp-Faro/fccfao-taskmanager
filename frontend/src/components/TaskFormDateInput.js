import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TaskFormDateInput = () => {
  return (
    <div>
      <FormGroup>
        <Label for="dateInput">Date</Label>
        <Input type="date" name="date" id="dateInput" />
      </FormGroup>
    </div>
  );
};

export default TaskFormDateInput;
