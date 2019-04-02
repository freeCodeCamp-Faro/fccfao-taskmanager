import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TaskFormDescriptionInput = () => {
  return (
    <div>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
    </div>
  );
};

export default TaskFormDescriptionInput;
