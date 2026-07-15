import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import CreatePost from './components/CreatePost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/create' element={<CreatePost />} />
      
      <Route path='/' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
