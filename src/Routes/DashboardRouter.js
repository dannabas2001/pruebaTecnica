import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Detalle from '../Containers/Detalle'
import Home from '../Containers/Home'

const DashboardRouter = () => {
  return (
    <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/detalle/:id" element={<Detalle/>}/>
    </Routes>
  )
}

export default DashboardRouter