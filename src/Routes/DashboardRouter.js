import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Containers/Home'

const DashboardRouter = () => {
  return (
    <Routes>
        <Route path="/Home" element={<Home/>}/>
    </Routes>
  )
}

export default DashboardRouter