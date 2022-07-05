import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'

const PublicDashboard = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
    </Routes>
  )
}

export default PublicDashboard