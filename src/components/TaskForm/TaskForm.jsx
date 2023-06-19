import { useState } from "react";
import {
  Advertisement,
  Button,
  Form,
  Input,
  Message,
  // Select,
  TextArea,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./TaskForm.css";

const TaskForm = () => {
  const [dueDate, setDueDate] = useState(null);
  const onChange = (date) => setDueDate(date);

  return (
    <>
      <Advertisement
        className="form-header"
        unit="large leaderboard"
        test="Add a Task"
      />
      <Form className="task-form" error loading={false} success>
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Task Name"
          placeholder="What is the name of the task"
          required
          error={{
            content: "Please enter a valid email address",
            pointing: "below",
          }}
        />
        <Form.Field
          id="form-input-control-description"
          control={TextArea}
          label="Task Description"
          placeholder="Add a description"
        />
        <Form.Group className="form-group" widths="equal">
          <Form.Field
            id="form-input-control-error-assigned"
            control={Input}
            label="Assigned To"
            placeholder="joe@schmoe.com"
            required
            error={{
              content: "Please enter a valid email address",
              pointing: "below",
            }}
          />
          <DatePicker
            className="form-datepicker"
            onChange={onChange}
            placeholderText={dueDate || "Due Date"}
          />
        </Form.Group>
        <Form.Field id="Add Task" control={Button} content="Submit" />
        <Message
          success
          header="Form Completed"
          content="You're all signed up for the newsletter"
        />
      </Form>
    </>
  );
};

export default TaskForm;
