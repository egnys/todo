import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './img/arrow.png'
import './styles/App.css'
import ToDos from "./components/ToDos";
import ToDoForm from "./components/ToDoForm";


function App() {
    const [todos, setTodos] = useState([])
    React.useEffect(() => {
        const storageTodos = localStorage.getItem('todos');
        if (storageTodos) {
          setTodos(JSON.parse(storageTodos));
        }
      }, []);
    function createToDo(newToDo){
        setTodos([...todos, newToDo])
        localStorage.setItem('todos', JSON.stringify([...todos, newToDo]));
    }
    function removeToDo(todo){
        const updatedTodos = todos.filter(todos => todos.id !== todo.id)
        setTodos(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }
    function changeToDo(todo){
        const changedTodo = todos.map(todos => todos.id === todo.id ? {
            id: todos.id,
            body: todos.body,
            done: !todos.done
        } : todos)
        setTodos(changedTodo)
        localStorage.setItem('todos', JSON.stringify(changedTodo))
    }
  return (
    <div className="App">
      <div className="container ">
          <div className="row justify-content-center">
              <div className="col-6">
                  <ToDoForm create={createToDo} />
                  {todos.length ? <ToDos className="mt-5" todos={todos} remove={removeToDo} change={changeToDo}/> : <div className="d-flex justify-content-center">
                      <p className="p__noTodo">Click here to add new task</p>
                      <img className='image' src={arrow} alt="arrow"/>
                  </div>}
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
