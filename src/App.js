import { Card, Container, Header } from "semantic-ui-react";

import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

import data from './data/tasks.json'

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header className="app-header" size="huge">
        Task Manager
      </Header>
      <Container className="form-container">
        <TaskForm />
      </Container>
      <Container className="cards-container">
        <Card.Group>
          <TaskCard {...data[0]} />
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;

