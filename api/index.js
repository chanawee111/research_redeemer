const express = require('express'); //import express initial for create Middleware
const app = express(); // 
const {v4:uuid} = require('uuid');

app.use(express.json());
app.use(express.urlencoded({extended: true}));  
app.use((req, res, next) => {

})