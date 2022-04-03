import './App.css';
import TodoApp from './TodoApp';
import { TodosProvider } from './contexts/todoContext';

function App() {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
}

export default App;
