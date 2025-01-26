import { useState } from 'react'
import './App.css'

function App() {

  const [task, settask] = useState([{
    title: "",
    desc: ""
  }])

  const onChangeHandler = (e)=>{
    const {name, value} = e.target;
    settask([...task, {[name]: value}])
  }

  return (
    <>
      <div className="container">
        <input name='title' onChange={onChangeHandler} type="text" placeholder='Enter task' />
        <input name="desc"  onChange={onChangeHandler} type="text" placeholder='Enter desc' />
        <button>Add</button>

        <div className="displayTask">
            {task.map((item,index)=>{
              return(
                <div key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })}
            
        </div>
      </div>

    </>
  )
}

export default App
