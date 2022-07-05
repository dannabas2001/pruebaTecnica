import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicDashboard from './PublicDashboard'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { PublicRouter } from './PublicRoutes'
import { PrivateRouter } from './PrivateRoutes'
import DashboardRouter from './DashboardRouter'

const AppRoutes = () => { 
  const [checking, SetChecking]= useState(true)
  const [Logged, setLogged] = useState(false)
  useEffect(()=>{
    const auth =getAuth()
    onAuthStateChanged(auth,(user)=>{
      if(user?.uid){
        setLogged(true)
        console.log(user, 'aqui', Logged)
      } 
      else{
        setLogged(false)
      }
      SetChecking(false)

    })
  },[SetChecking,setLogged])
  if (checking){
    <h1>'espere un momento por favor'</h1>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter isAutentication={Logged}><PublicDashboard/></PublicRouter>} />
        <Route path="/*" element={<PrivateRouter isAutentication={Logged}><DashboardRouter/></PrivateRouter>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes