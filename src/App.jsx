import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import CreatePost from './components/CreatePost'
import ViewMyPost from './components/ViewMyPost'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewAll from './components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/create' element={<CreatePost />} />
      <Route path='/viewmypost' element={<ViewMyPost />} />
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/viewall' element={<ViewAll />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
