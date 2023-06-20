import { useCallback, useState } from 'react';
import { Card, Container, Header } from 'semantic-ui-react';

import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

// import data from './data/tasks.json'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = useCallback(
    (task) => {
      setTasks([...tasks, task]);
    },
    [tasks]
  );

  const handleDeleteTask = useCallback(
    (id) => {
      setTasks(tasks.filter((t) => t.id !== id));
    },
    [tasks]
  );

  const handleMarkDone = useCallback(
    (id) => {
      const copyTasks = [...tasks];
      const foundTask = copyTasks.find((t) => t.id === id);
      if (foundTask) {
        foundTask.status = 'DONE';
      }
      setTasks(copyTasks);
    },
    [tasks]
  );

  return (
    <div className="App">
      <Header className="app-header" size="huge">
        Task Manager
      </Header>
      <Container className="form-container">
        <TaskForm handleAddTask={handleAddTask} />
      </Container>
      <Container className="cards-container">
        <Card.Group className="task-group">
          {tasks.map((task) => (
            <TaskCard
              {...task}
              handleClickDelete={handleDeleteTask}
              handleClickDone={handleMarkDone}
            />
          ))}
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;
