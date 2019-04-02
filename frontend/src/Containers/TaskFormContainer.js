import React from 'react';
import TaskFormDateInput from '../components/TaskFormDateInput';
import TaskFormDescriptionInput from '../components/TaskFormDescriptionInput';
import TaskFormTitleInput from '../components/TaskFormTitleInput';
import TaskFormPriority from '../components/TaskFormPriority';
import { Form, Button } from 'reactstrap';

class TaskFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormSubmit = e => {
    e.preventDefault();
    console.log('Form successfully submited');
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <TaskFormPriority />
          <TaskFormTitleInput />
          <TaskFormDescriptionInput />
          <TaskFormDateInput />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default TaskFormContainer;
