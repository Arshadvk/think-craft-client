import React, { useEffect, useState } from 'react'
import UserListTable from '../../components/admin/user/UserListTable'
import Navbar from '../../components/common/nav/Navbar'
import SearchBar from '../../components/common/search-bar/SearchBar'
import { fetchUserDetails } from '../../services/admin/user'
import { useErrorHandler } from '../../hooks/ErrorHandler'



function UserListPage({type }) {
  const user = type
  const [userData, setUserData] = useState([]);
  const {adminAutheticationHandler } = useErrorHandler()
  useEffect(() => {
      
      fetchUserDataHelper()
  }, [user]);

  const  fetchUserDataHelper = async () =>{
    try {
      const data = await fetchUserDetails(user)
      setUserData(data)
    } catch (error) {
      adminAutheticationHandler(error)
    }
  } 

  return (
    <div>
      <Navbar type={"admin"} />
      <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-20">
        <SearchBar  user={user} setData={setUserData} type={"user"}/>
      <UserListTable type={user} setUserDate={setUserData} userData={userData}/>
      </section>   
      </div>
    </div>
  )
}

export default UserListPage
