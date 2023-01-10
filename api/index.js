const { application } = require('express');
const express = require('express'); //import express initial for create Middleware
const app = express(); // 
const {v4:uuid} = require('uuid');

app.use(express.json());
app.use(express.urlencoded({extended: true}));  
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,DELETE"
    )
    next();
})

let users = [
    {'id':'1','name':'Panita','email':'Panita_12@gmail.com'},
    {'id':'2','name':'Chatpol','email':'Chatpol_12@gmail.com'},
    {'id':'3','name':'Chalathip','email':'Chalathip_12@gmail.com'},
    {'id':'4','name':'Kongkiat','email':'Kongkiat_12@gmail.com'},
    {'id':'5','name':'Chanitra','email':'Chanitra_12@gmail.com'},
    {'id':'6','name':'Nitradee','email':'Nitradee_12@gmail.com'},
    {'id':'7','name':'Wimonrat','email':'Wimonrat_12@gmail.com'},
    {'id':'8','name':'Tanisorn','email':'Tanisorn_12@gmail.com'},
    {'id':'9','name':'Nonnatin','email':'Nonnatin_12@gmail.com'},
    {'id':'10','name':'Sira','email':'Sira_12@gmail.com'}
];

app.get('/api/users',(req,res) =>{
    if(users.length >= 0){
        res.status(200).send(users);
    }else {
        res.status(400).send('Not found any Users')
    }
});

app.get('/api/user/:id',(req,res) =>{
    const id = req.params.id;
    const index = users.findIndex(user => user.id === id);
    const user = users.find(item => item.id === id);
    const userAndIndex = {
        ...user,
        userIndex : index
    }
    if(user){
        res.status(200).send(userAndIndex);
    }else {
        res.status(400).send(`NOT FOUND USER FOR ID ${id}`)
    }
});

app.post('/api/user',(req,res)=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    if(userName.length <= 0){
        res.status(400).send('Error : cannot add user!');
    }else {
        const addUser = {
            'id': uuid(),
            'name': userName,
            'email':userEmail
        }
        users.push(addUser);
        res.send(`Add Successfully : ${users}`)
    }
});

app.delete('/api/user/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find(item => item.id === id);
    if(user){
        const index = users.indexOf(user);
        users.slice(index,1);
    }else {
        res.status(400).send(`Error : cannot delete user id:${id}!`);
    }
});

app.put('api/user/:id',(req,res)=>{
    const id = req.params.id;
    const userName = req.body.name;
    const userEmail = req.body.email;
    if(userName <= 0){
        res.status(400).send(`Error cannot update user id:${id}`);
    }else {
        let user = users.find(item => item.id === id);
        if(user){
            user.name = userName;
            user.email = userEmail;
            res.status(200).send(`Update user id:${id} value : ${user}`)
        }else {
            res.status(400).send(`User id ${is} NOT FOUND`)
        }
    }
})

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Listening on port`,port)
})