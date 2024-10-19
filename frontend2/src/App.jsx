import { useState } from 'react'
import reactlogo from './assets/react.svg'

import './App.css'
import axios from 'axios'
import  {useEffect} from 'react'

function App() {

  const [jokes,setjokes] = useState([])


  useEffect(()=>{
  axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    }
  )

    .catch((error)=>{
      console.log(error)  
    }) 
  })
  

  return (
    <>
    <h1>  Chai and full Stack  </h1>
    <p>JOKES:{jokes.length}</p>
    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <P>{joke.content}</P>
        </div>
      ))
    }
    </>
  )
}

export default App
