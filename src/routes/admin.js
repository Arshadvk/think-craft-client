import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminlogin from '../pages/admin/Login'
import AdminHomePage from '../pages/admin/AdminHomePage'

function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<AdminHomePage/>}/>
        <Route  exact path='/login' element={<Adminlogin/>}/>

      </Routes>
    </div>
  )
}

export default AdminRoute
