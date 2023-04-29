import React from 'react';
import ToDoItem from "./ToDoItem";

const ToDos = ({todos, remove, change}) => {
    return (
        <div className="mt-5 width-600 m-auto">
            {todos.map((todo, index) => <ToDoItem remove={remove} change={change} number={index + 1} todo={todo} key={todo.id}/>)}
        </div>
    );
};

export default ToDos;