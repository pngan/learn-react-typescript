import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import {AiFillEdit } from 'react-icons/ai';
import {MdDone, MdDelete } from 'react-icons/md';
import './styles.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo = ({todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    function handleDone(id: number): void {
        setTodos(todos.map(todo=>todo.id===id?{...todo, isDone:!todo.isDone}:todo));
    }

    function handleDelete(id: number): void {
        setTodos(todos.filter(todo=>todo.id!==id));
    }

    function handleEdit(e: React.FormEvent<HTMLFormElement>, id: number): void {
        e.preventDefault();
        setTodos(todos.map(todo => (   //// What not {}?
            todo.id===id?{...todo, todo:editTodo}: todo
        )));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => 
    {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className="todos__single" onSubmit={(e)=>handleEdit(e, todo.id)}>
            {
                edit ? (<input
                    ref={inputRef}
                    value={editTodo} 
                    onChange={(e) => setEditTodo(e.target.value)
                }
                className='todos__single--text' />)
                    :
                    todo.isDone
                        ? (<s className="todos__single--text">{todo.todo}</s>)
                        : (<span className="todos__single--text"> {todo.todo}</span>)

            }

            <div>
                <span className="icon" onClick={()=>{
                    if (!edit && !todo.isDone)
                    {
                        setEdit(true);
                    }}
                }>
                <AiFillEdit  />
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
                <MdDelete/>
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  );
}

export default SingleTodo
