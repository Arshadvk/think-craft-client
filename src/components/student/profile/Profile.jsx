import React, { useEffect, useState } from 'react'
import adminLogin from '../../../assets/image/adminLogin.jpg'
import studentAxios from '../../../axios/studentAxios'

function ProfileTable() {
  const [userData , setUserData] = useState({})
  const id = "64c7c9eeac02f2fb4222dff0";

  useEffect(() => {
    studentAxios.get(`/profile/${id}`, )
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='lg:ml-64 mt-10'>
    <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
      <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg max-w-3xl p-5">
        {/* image */}
        <div className="sm:block hidden w-1/2 rounded-2xl overflow-hidden">
          {/* Add the "rounded" class to apply the border radius */}
          <img className="rounded-2xl" src={adminLogin} alt="" />
        </div>

        {/* form */}
        <div className="sm:w-1/2 px-3 ">
         <h1 className="font-bold text-xl text-shadow ">PROFILE </h1>
          <h1>full name : <b>{userData.name}</b></h1>
          <h1>Domain : <b>Mern</b></h1>
          <h2>date of birth : </h2>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default ProfileTable
