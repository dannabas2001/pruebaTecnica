import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicDashbard from './PublicDashboard'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { PublicRouter } from './PublicRoutes'
import { PrivateRouter } from './PrivateRoutes'
import DashboardRouter from './DashboardRouter'
import Login from '../Containers/Login'
import Register from '../Containers/Register'
const AppRoutes = () => {
    const Logged = false
//     const [checking, SetChecking]= useState(true)
//   const [Logged, setLogged] = useState(false)
//   useEffect(()=>{
//     const auth =getAuth()
//     onAuthStateChanged(auth,(user)=>{
//       if(user?.uid){
//         console.log(user)
//         setLogged(true)
//       }
//       else{
//         setLogged(false)
//       }
//       SetChecking(false)

//     })
//   },[SetChecking,setLogged])
//   if (checking){
//     <h1>'espere un momento por favor'</h1>
//   }
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    {/* <Route path="/*" element={<PublicRouter isAutentication={Logged}><PublicDashbard/></PublicRouter>}/>
    <Route path="/*" element ={<PrivateRouter isAutentication={Logged}><DashboardRouter/></PrivateRouter>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes