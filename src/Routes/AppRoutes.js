import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { PublicRouter } from './PublicRoutes'
import { PrivateRouter } from './PrivateRoutes'
import DashboardRouter from './DashboardRouter'
import Login from '../Containers/Login'
import Register from '../Containers/Register'

const AppRoutes = () => { 
  const [cheking, setCheking] = useState(true)
    const [Logged, setIsLoggedIn] =useState(false)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
                console.log(user)
                setIsLoggedIn(true)
            }
            else{
                setIsLoggedIn(false)  
            }
            setCheking(false)
        })
    }, [setIsLoggedIn, setCheking])

    if(cheking) {
        return (
           <h1 style={{color:'white'}}>Espere....</h1>
         
        )
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRouter isAutentication={Logged}>
          <Login />
        </PublicRouter>} />
        <Route path="/register" element={<PublicRouter isAutentication={Logged}>
          <Register />
        </PublicRouter>} />
        <Route path="/*" element={<PrivateRouter isAutentication={Logged}>
          <DashboardRouter/>
          </PrivateRouter>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes