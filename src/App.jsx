import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Template from '../src/Template'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
    {/* <Template/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
