import express from "express"
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.get('/about',(req,res)=>{
    res.send("<p>This is my about page</p>")
})

app.post('/register',(req,res)=>{
    res.sendStatus(201);
})
app.put('/user/abhinav',(req,res)=>{
    res.sendStatus(200);
})
app.delete('/user/abhinav',(req,res)=>{
    res.sendStatus(200);
})

app.listen(port ,()=>{
    console.log(`server is running at the port number ${port}`)
})