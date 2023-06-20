import { useState } from 'react';
import { Card, Container, Header } from "semantic-ui-react";

import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

import data from './data/tasks.json'

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
const [tasks, setTasks] = useState(data)

  return (
    <div className="App">
      <Header className="app-header" size="huge">
        Task Manager
      </Header>
      <Container className="form-container">
        <TaskForm />
      </Container>
      <Container className="cards-container">
        <Card.Group className='task-group'>
          {tasks.map(task => (<TaskCard {...task} />))}
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;

