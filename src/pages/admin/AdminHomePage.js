import React from 'react'
import Navbar from '../../components/admin/nav/Navbar'
import CreateUser from '../../components/admin/createUser/CreateUser'
import UserListTable from '../../components/admin/createUser/UserListTable'
import SearchBar from '../../components/admin/nav/SearchBar'

function AdminHomePage() {
  return (
    <div>
      <Navbar/>
      <CreateUser/>
    </div>
  )
}

export default AdminHomePage
