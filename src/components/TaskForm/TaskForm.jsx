import { useCallback, useState } from "react";
import {
  Advertisement,
  Button,
  Form,
  Input,
  Message,
  TextArea,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskObj, setTaskObj] = useState({});
  const [dueDate, setDueDate] = useState(null);
  const [verified, setVerified] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (date) => setDueDate(date);

  const handleChange = useCallback(
    (e) => {
      setTaskObj({ ...taskObj, [e.target.name]: e.target.value });
      setVerified(false);
    },
    [taskObj]
  );

  const handleSubmit = useCallback(() => {
    const { name, assigned } = taskObj;
    console.log(name, assigned);
    if (Object.values({ name, assigned }).filter((val) => val).length === 2) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setVerified(true);
  }, [taskObj]);

  return (
    <>
      <Advertisement
        className="form-header"
        unit="large leaderboard"
        test="Add a Task"
      />
      <Form
        className="task-form"
        loading={false}
        success={verified && success}
        onSubmit={handleSubmit}
      >
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Task Name"
          name="name"
          placeholder="What is the name of the task"
          // required
          error={
            verified &&
            !success &&
            !taskObj.name && {
              content: "Please add a valid task name",
              pointing: "below",
            }
          }
          onChange={handleChange}
        />
        <Form.Field
          id="form-input-control-description"
          control={TextArea}
          label="Task Description"
          name="description"
          placeholder="Add a description"
          onChange={handleChange}
        />
        <Form.Group className="form-group" widths="equal">
          <Form.Field
            id="form-input-control-error-assigned"
            control={Input}
            label="Assigned To"
            name="assigned"
            placeholder="joe@schmoe.com"
            // required
            error={
              verified &&
              !success &&
              !taskObj.assigned && {
                content: "Please assign the task to a person",
                pointing: "below",
              }
            }
            onChange={handleChange}
          />
          <DatePicker
            className="form-datepicker"
            onChange={onChange}
            placeholderText={dueDate || "Due Date"}
          />
        </Form.Group>
        <Button id="Add Task" content="Add Task" type="submit" />
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
