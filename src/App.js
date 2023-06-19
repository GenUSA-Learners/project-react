import { Container, Header } from "semantic-ui-react";

import TaskForm from "./components/TaskForm";

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
    </div>
  );
}

export default App;

