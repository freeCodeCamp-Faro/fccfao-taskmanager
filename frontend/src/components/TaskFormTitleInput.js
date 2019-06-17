import React from 'react';
import { Input, FormGroup, Label } from 'reactstrap';

const TaskFormTitleInput = () => {
  return (
    <div>
      <FormGroup>
        <Label for="task-title-input">Title</Label>
        <Input id="task-title-input" name="title" />
      </FormGroup>
    </div>
  );
};

export default TaskFormTitleInput;
