import React from 'react'
import CreateUser from '../../components/admin/user/CreateUser'
import Navbar from '../../components/common/nav/Navbar'
import AddDomain from '../../components/admin/task/AddDomain'

function AdminHomePage() {
  return (
    <div>
      <Navbar type={"admin"}/>
      <div className="lg:ml-64 ">
        <section className="bg-gray-50 min-h-screen py-20 w-full gap-5">
      <CreateUser/>
      <AddDomain /> 
        </section>
      </div>
    </div>
  )
}

export default AdminHomePage
