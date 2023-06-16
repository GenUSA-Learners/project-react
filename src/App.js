import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <div>
        <Button loading primary>
          Loading
        </Button>
      </div>
    </div>
  );
}

export default App;
