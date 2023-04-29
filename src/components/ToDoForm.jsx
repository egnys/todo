import React, {useState} from 'react';

const ToDoForm = ({create}) => {
    const [todo, setTodo] = useState('')

    function createTodo (e){
        e.preventDefault()
        const newTodo = {
            id: Date.now(),
            body: todo,
            done: false,
        }
        newTodo.body ? create(newTodo) : <div style={{color: "red"}}>hello</div>

        setTodo('')
    }
    return (
        <form className="text-center mt-15">
            <span className="text-center title">My <span className="todo__span">ToDo</span> List</span>
            <div className="todo__create d-flex justify-content-between align-items-center mt-50 ">
                <input
                       type="text"
                       placeholder="Add a new Task"
                       value={todo}
                       onChange={event => setTodo(event.target.value)}
                />
                <button className="create__button" onClick={createTodo}>Add</button>
            </div>
        </form>
    );
};

export default ToDoForm;