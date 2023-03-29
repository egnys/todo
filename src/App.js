import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './img/arrow.png'
import './styles/App.css'
import ToDos from "./components/ToDos";
import ToDoForm from "./components/ToDoForm";


function App() {
    const [todos, setTodos] = useState([])
    function createToDo(newToDo){
        setTodos([...todos, newToDo])
    }
    function removeToDo(todo){
        setTodos(todos.filter(todos => todos.id !== todo.id))
    }
  return (
    <div className="App">
      <div className="container ">
          <div className="row justify-content-center">
              <div className="col-6">
                  <ToDoForm create={createToDo} />
                  {todos.length ? <ToDos className="mt-5" todos={todos} remove={removeToDo}/> : <div className="d-flex justify-content-center">
                      <p className="p__noTodo">Click here to add new task</p>
                      <img style={{height: '65px'}} src={arrow} alt="arrow"/>
                  </div>}
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
