import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminlogin from '../pages/admin/Login'
import AdminHomePage from '../pages/admin/AdminHomePage'
import { useSelector } from 'react-redux'
import UserListPage from '../pages/admin/UserListPage'

function AdminRoute() {
  const IsAdmin = useSelector((state)=>state.Admin)
  console.log("arshad"+IsAdmin);
  return (
    <div>
      <Routes>
        <Route exact path='/' element={!IsAdmin.Token?<Adminlogin/> : <AdminHomePage/>}/>
        <Route  exact path='/login' element={IsAdmin.Token? <AdminHomePage/>:<Adminlogin/>}/>
        <Route  exact path='/student-list' element={IsAdmin.Token ? <UserListPage type={"student"}/> : <Adminlogin/>}/>
        <Route  exact path='/reviewer-list' element={IsAdmin.Token ? <UserListPage type={"reviewer"}/>: <Adminlogin/>}/>
        <Route  exact path='/advisor-list' element={IsAdmin.Token ? <UserListPage type={"advisor"}/> : <Adminlogin/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoute
