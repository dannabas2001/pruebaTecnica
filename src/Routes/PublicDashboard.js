import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'

const PublicDashbard = () => {
  return (
    <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
    </Routes>
  )
}

export default PublicDashbard