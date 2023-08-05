import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminlogin from '../pages/admin/Login'
import AdminHomePage from '../pages/admin/AdminHomePage'
import StudentListTable from '../pages/admin/StudentListPage'
import ReviewerListPage from '../pages/admin/ReviewerListPage'
import AdvisorListPage from '../pages/admin/AdvisorListPage'
import { useSelector } from 'react-redux'

function AdminRoute() {
  const IsAdmin = useSelector((state)=>state.Admin)
  console.log("arshad"+IsAdmin);
  return (
    <div>
      <Routes>
        <Route exact path='/' element={!IsAdmin.Token?<Adminlogin/> : <AdminHomePage/>}/>
        <Route  exact path='/login' element={IsAdmin.Token? <AdminHomePage/>:<Adminlogin/>}/>
        <Route  exact path='/student-list' element={<StudentListTable/>}/>
        <Route  exact path='/reviewer-list' element={<ReviewerListPage/>}/>
        <Route  exact path='/advisor-list' element={<AdvisorListPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoute
