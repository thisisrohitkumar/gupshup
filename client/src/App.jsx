import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import Home from './pages/home/Home'
import Login from './pages/authentication/login/Login'
import Signup from './pages/authentication/signup/Signup'

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App