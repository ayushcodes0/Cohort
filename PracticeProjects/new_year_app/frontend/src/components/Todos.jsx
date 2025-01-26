import React from 'react'

const Todos = ({todos}) => {
  return (
    <div>
      {todos.map((item,index)=>{
        return (
            <div key={index} className="a">
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                <button>{item.completed == true? "Completed" : "Mark as Completed"}</button>
            </div>
        )
      })}
    </div>
  )
}

export default Todos
