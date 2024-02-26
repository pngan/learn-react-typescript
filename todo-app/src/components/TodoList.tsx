import React from 'react'
import "./styles.css"
import { Todo } from '../model';


interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}:Props) => {
  return <div className='Todos'> 
  {
    todos.map(todo=>(
        <li>{todo.todo}</li>
    )) 
  }
  </div>;
}

export default TodoList;