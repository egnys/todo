import React from 'react';
import '../styles/App.css'

type TodoType = {
    id: number;
    body: string;
    done: boolean;
}
type ToDosType = {
    remove: (todo: TodoType) => void,
    change: (todo: TodoType) => void,
    number: number,
    key: number,
    todo: TodoType
}
const ToDoItem:React.FC<ToDosType> = ({remove, change, number, todo}) => {
    return (
        <div className="m-auto d-flex justify-content-between mb-2 mt-3 todo__item" >
            <h3
                onClick={() => change(todo)}
                style={{textDecoration: todo.done ? 'line-through' : 'none', cursor: "pointer"}}
            >
                {number}. {todo.body}
            </h3>
            <button onClick={() => remove(todo)}>Delete</button>
        </div>
    );
};

export default ToDoItem;