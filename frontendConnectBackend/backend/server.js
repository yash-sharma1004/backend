const express= require('express')
// import express from 'express'
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("yashsharma04")
})

app.get('/insta',(req, res)=>{
    res.send('yasshhh.004')
})


app.get('/api/jokes',(req,res)=>{
 const jokes=[
    {
        id:1,
        title:"A joke",
        content:"this is the first joke"
    },
    {
        id:2,
        title:'2nd joke',
        content:'this is the second joke'
    },
    {
        id:3,
        title:'3rd joke',
        content:'this is the third joke'
    },
    {
        id:4,
        title:'4th joke',
        content:'this is the fourth joke'
    }
 ]

    res.send(jokes)
})


app.get('/login',(req,res)=>{ 
    res.send("<h1>please login to get  access</h1>")
})

app.listen(port, () => {
  console.log(`http://localhost: ${port}`)
})




