import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHomePage from '../pages/admin/AdminHomePage'
import { useSelector } from 'react-redux'
import UserListPage from '../pages/admin/UserListPage'
import CreateTaskPage from '../pages/admin/CreateTaskPage'
import Login from '../components/common/login/Login'
import AdminTaskList from '../pages/admin/AdminTaskList'
import AdminWeekListing from '../pages/admin/AdminWeekListing'
import AdminTaskDetails from '../pages/admin/AdminTaskDetails'


function AdminRoute() {
  const IsAdmin = useSelector((state) => state.Admin)
  return (
    <div>
      <Routes>
        <Route exact path='/' element={!IsAdmin.Token ? <Login type={'admin'} /> : <AdminHomePage />} />
        <Route exact path='/login' element={IsAdmin.Token ? <AdminHomePage /> : <Login type={'admin'} />} />
        <Route exact path='/student-list' element={IsAdmin.Token ? <UserListPage type={"student"} /> : <Login type={'admin'} />} />
        <Route exact path='/reviewer-list' element={IsAdmin.Token ? <UserListPage type={"reviewer"} /> : <Login type={'admin'} />} />
        <Route exact path='/advisor-list' element={IsAdmin.Token ? <UserListPage type={"advisor"} /> : <Login type={'admin'} />} />
        <Route exact path='/create-task' element={IsAdmin.Token ? <CreateTaskPage /> : <Login type={'admin'} />} />
        <Route exact path='/domain-list' element={IsAdmin.Token ? <AdminTaskList /> : <Login type={'admin'} />} />
        <Route exact path='/week-list/:id' element={IsAdmin.Token ? <AdminWeekListing /> : <Login type={'admin'} />} />
        <Route exact path='/task-details/:id' element={IsAdmin.Token ? <AdminTaskDetails /> : <Login type={'admin'} />} />

      </Routes>
    </div>
  )
}

export default AdminRoute
