import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {

  const [todos, settodos] = useState([]);

  const fetchTodos = async()=>{
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    settodos(data.data);
  }
  
  useEffect(() => {
    fetchTodos();
  }, [])
  
  

  return (
    <div>
      Hello
      <CreateTodo/>
      <Todos todos = {todos} />
    </div>
  )
}

export default App
