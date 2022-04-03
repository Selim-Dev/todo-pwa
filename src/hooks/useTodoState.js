import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './uselocalStorageState';

const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos(() => [
        ...todos,
        {
          id: uuidv4(),
          title: newTodoText,
          completed: false,
        },
      ]);
    },
    removeTodo: (todoId) => {
      //filter out removed todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      // call setTodos with new todos array
      setTodos(() => updatedTodos);
    },
    toggleTodo: (todoId) => {
      setTodos((oldTodos) =>
        oldTodos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    editTodo: (todoId, newTitle) => {
      if (!newTitle) return;
      setTodos((oldTodos) =>
        oldTodos.map((todo) =>
          todo.id === todoId ? { ...todo, title: newTitle } : todo
        )
      );
    },
  };
};
export default useTodoState;
