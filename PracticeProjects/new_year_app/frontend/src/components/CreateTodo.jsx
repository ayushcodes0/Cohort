import React, { useState } from 'react'

const CreateTodo = () => {

    const [title, settitle] = useState("");
    const [description, setdescription] = useState("")

    const createTodo = async()=>{
        const response = await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: {
                title: title,
                description: description
            }
        })

        if(response.success){
            alert("todo added")
        }
    }
  return (
    <div>
      <input type="text" placeholder='title' onChange={(e)=>{
        const value = e.target.value;
        settitle(value);
      }}  />
      <input type="text" placeholder='description' onChange={(e)=>{
        const value = e.target.value;
        setdescription(value);
      }}  />
      <button onClick={()=>{createTodo()}}>Add</button>
    </div>
  )
}

export default CreateTodo
