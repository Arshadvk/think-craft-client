import React from 'react'
import UserListTable from '../../components/admin/user/UserListTable'
import Navbar from '../../components/common/nav/Navbar'
import SearchBar from '../../components/admin/SearchBar'



function UserListPage({type}) {
  const user = type
  return (
    <div>
      <Navbar type={"admin"} />
      <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-20">
        <SearchBar />
      <UserListTable type={user} />
      </section>   
      </div>
    </div>
  )
}

export default UserListPage
