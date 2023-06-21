import { useCallback, useEffect, useState } from 'react';
import {
  Advertisement,
  Button,
  Form,
  Input,
  Message,
  TextArea,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './TaskForm.css';

const initialFormState = {
  name: '',
  description: '',
  assigned: '',
  dueDate: null,
  status: 'TODO',
};

const TaskForm = ({ handleAddTask }) => {
  const [taskObj, setTaskObj] = useState({ ...initialFormState });
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (date) => {
    setTaskObj({ ...taskObj, dueDate: date });
  };

  const handleChange = useCallback(
    (e) => {
      setTaskObj({ ...taskObj, [e.target.name]: e.target.value });
      setVerified(false);
      setSuccess(false);
    },
    [taskObj]
  );

  const handleSubmit = useCallback(() => {
    const { name, assigned } = taskObj;
    if (Object.values({ name, assigned }).filter((val) => val).length === 2) {
      setLoading(true);
      setTimeout(() => {
        handleAddTask({
          ...taskObj,
          dueDate: taskObj.dueDate && taskObj.dueDate.toDateString(),
        });
        setTaskObj({ ...initialFormState });
        setLoading(false);
        setSuccess(true);
        setVerified(true);
      }, 1000);
    } else {
      setSuccess(false);
      setVerified(true);
    }
  }, [taskObj]);

  useEffect(() => {
    if (success)
      setTimeout(() => {
        setSuccess(false);
        setVerified(false);
      }, 3000);
  }, [success]);

  return (
    <>
      <Advertisement
        className="form-header"
        unit="large leaderboard"
        test="Add a Task"
      />
      <Form
        className="task-form"
        loading={loading}
        success={verified && success}
        onSubmit={handleSubmit}
      >
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Task Name"
          name="name"
          placeholder="What is the name of the task"
          error={
            verified &&
            !success &&
            !taskObj.name && {
              content: 'Please add a valid task name',
              pointing: 'below',
            }
          }
          value={taskObj.name}
          onChange={handleChange}
        />
        <Form.Field
          id="form-input-control-description"
          control={TextArea}
          label="Task Description"
          name="description"
          placeholder="Add a description"
          value={taskObj.description}
          onChange={handleChange}
        />
        <Form.Group className="form-group" widths="equal">
          <Form.Field
            id="form-input-control-error-assigned"
            control={Input}
            label="Assigned To"
            name="assigned"
            placeholder="Joe Schmoe"
            error={
              verified &&
              !success &&
              !taskObj.assigned && {
                content: 'Please assign the task to a person',
                pointing: 'below',
              }
            }
            value={taskObj.assigned}
            onChange={handleChange}
          />
          <DatePicker
            className="form-datepicker"
            onChange={onChange}
            placeholderText={!taskObj.dueDate ? 'Due Date' : undefined}
            selected={taskObj.dueDate}
          />
        </Form.Group>
        <Button id="Add Task" content="Add Task" type="submit" primary />
        <Message
          className="success-message"
          success
          header="Form Completed"
          content="You're task has been added!"
        />
      </Form>
    </>
  );
};

export default TaskForm;
