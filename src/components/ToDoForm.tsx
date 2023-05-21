import React, {useState} from 'react';


type TodoType = {
    id: number;
    body: string;
    done: boolean;
}
type ToDoProps = {
    create: (todo: TodoType) => void,
}
const ToDoForm: React.FC<ToDoProps> = ({create}) => {
    const [todo, setTodo] = useState<string>('')

    function createTodo (e : React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        const newTodo:TodoType = {
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