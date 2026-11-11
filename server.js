const tasks = [
    {
        id: 1,
        title: "Learn backend",
        completed: false
    },
    {
        id: 2,
        title: "Build REST API",
        completed: true
    },
    {
        id: 3,
        title: "Learn PostgreSQL",
        completed: false
    }
];

const express = require("express");
const app = express();

app.get('/tasks',(req,res)=>{
    res.json(tasks);
});

app.listen(3000, ()=>{
    console.log("this is working");
});