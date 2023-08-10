import React from 'react'
import UserListTable from '../../components/admin/user/UserListTable'
import Navbar from '../../components/common/nav/Navbar'



function UserListPage({type}) {
  const user = type
  return (
    <div>
      <Navbar type={"admin"} />
   
      <UserListTable type={user} />
      
    </div>
  )
}

export default UserListPage
