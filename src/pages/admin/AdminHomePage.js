import React from 'react'
import CreateUser from '../../components/admin/user/CreateUser'
import Navbar from '../../components/common/nav/Navbar'
import AddDomain from '../../components/admin/task/AddDomain'

function AdminHomePage() {
  return (
    <div>
      <Navbar type={"admin"}/>
      <CreateUser/>
      <AddDomain /> 
    </div>
  )
}

export default AdminHomePage
