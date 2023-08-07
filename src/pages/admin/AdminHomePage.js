import React from 'react'
import CreateUser from '../../components/admin/user/CreateUser'
import Navbar from '../../components/common/nav/Navbar'

function AdminHomePage() {
  return (
    <div>
      <Navbar type={"admin"}/>
      <CreateUser/>
    </div>
  )
}

export default AdminHomePage
