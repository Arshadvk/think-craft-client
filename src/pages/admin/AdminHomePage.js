import React from 'react'
import Navbar from '../../components/admin/nav/Navbar'
import CreateUser from '../../components/admin/user/CreateUser'


import SideBar from '../../components/admin/nav/SideBar'

function AdminHomePage() {
  return (
    <div>
      <Navbar/>
      <SideBar/>
      <CreateUser/>
    </div>
  )
}

export default AdminHomePage
