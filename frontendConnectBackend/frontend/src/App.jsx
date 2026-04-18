import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    let jokes  = axios.get(`https://github.com/15Dkatz/official_joke_api`)
    .then((response)=>{
      console.log(response.data);
      
        setJokes(response.data)
    })
    .catch(()=>{
      console.log("error detected");
       })
  })
  return (
  <>
  <h1>fullstack : frontend connects with backend </h1>
  <p>JOKES : {jokes.length}</p>

  {
    jokes.map((joke ,index)=>(

     <div key = {joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.content}</p>
      </div>
))
  
  }
  </>
  )
}

export default App
