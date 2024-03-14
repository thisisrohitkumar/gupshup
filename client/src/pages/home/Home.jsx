import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <NavLink to='/login'><button>Login</button></NavLink>
        <NavLink to='/signup'><button>Signup</button></NavLink>
    </>
  )
}

export default Home