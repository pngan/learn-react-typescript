import React, { useState } from 'react';
import './App.css';
import TaskField from './components/TaskField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}]);
      setTodo(""); 
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <TaskField 
        todo={todo} 
        setTodo={setTodo}
        handleAdd={handleAdd}
        ></TaskField>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
