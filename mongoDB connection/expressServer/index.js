const express= require('express')
// import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("yashsharma04")
})

app.get('/insta',(req, res)=>{
    res.send('yasshhh.004')
})

app.get('/login',(req,res)=>{
    res.send("<h1>please login to get  access</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
