import React from 'react';
import '../styles/App.css'
const ToDoItem = (props) => {
    return (
        <div className="m-auto d-flex justify-content-between mb-2 mt-3 todo__item" >
            <h3
                onClick={() => props.change(props.todo)}
                style={{textDecoration: props.todo.done ? 'line-through' : 'none', cursor: "pointer"}}
            >
                {props.number}. {props.todo.body}
            </h3>
            <button onClick={() => props.remove(props.todo)}>Delete</button>
        </div>
    );
};

export default ToDoItem;