const express = require('express');
const { createTodo, updateTodo } = require('./types');
const {connectDB, todoModel} = require('./db');
const cors = require("cors")
const app = express()

const port = 3000

connectDB();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req,res)=>{
    const createPayload = req.body;
    console.log(req.body.title);
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return (
            res.status(411).json({
            msg: "You send the wrong inputs",
            success: false,
            error: true
        })
        ) 
    }
    const todo = await todoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        msg: "Todo Created Successfully",
        error: false,
        success: true,
        data: todo
    })

})

app.get('/todos', async (req,res)=>{
    const todos = await todoModel.find();
    res.status(200).json({
        msg: "Done!",
        success: true,
        error: false,
        data: todos
    })
})

app.put('/completed', async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        return (
            res.status(411).json({
            msg: "You send the wrong inputs",
            success: false,
            error: true
        })
        ) 
    }
    const updatedTodo = await todoModel.findOneAndUpdate({_id: updatePayload.id}, {completed: true})
    const savedTodo = await updatedTodo.save();

    res.status(200).json({
        msg: "Todo Updated",
        error: false,
        success: true,
        data: savedTodo
    })
})

app.listen(port, () => {
    console.log(`App is running`)
})