import { Advertisement, Button, Form, Input, Select } from "semantic-ui-react";

import "./TaskForm.css";

const TaskForm = () => (
  <>
    <Advertisement
      className="form-header"
      unit="large leaderboard"
      test="Add a Task"
    />
    <Form className="form" error>
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          placeholder="First name"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          placeholder="Last name"
        />
        {/* <Form.Field
          control={Select}
          options={genderOptions}
          label={{ children: "Gender", htmlFor: "form-select-control-gender" }}
          placeholder="Gender"
          search
          searchInput={{ id: "form-select-control-gender" }}
        /> */}
      </Form.Group>
      <Form.Field
        id="form-input-control-error-email"
        control={Input}
        label="Email"
        placeholder="joe@schmoe.com"
        error={{
          content: "Please enter a valid email address",
          pointing: "below",
        }}
      />
      {/* Datepicker */}
      <Form.Field id="submit-button" control={Button} content="Submit" />
    </Form>
  </>
);

export default TaskForm;
