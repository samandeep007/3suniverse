const express = require('express') //require module syntax : CommonJS
// import express from "express";
require('dotenv').config(); //importing dotenv
const app = express() 
const port = 3000 //Virtual ports : listen to this port 


app.get('/', (req, res) => {  //app aap home route par listen karo, agar request aati hai to response mei hello world send krdo
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Welcome to Twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at 3Suniverse</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Pixel Corporation</h2>')
})

app.listen(process.env.PORT, () => { //process.env + .your_variable
  console.log(`Example app listening on port ${port}`)
})