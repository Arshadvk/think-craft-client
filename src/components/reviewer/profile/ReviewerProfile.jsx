import React, { useEffect, useState } from 'react'
import reviewerProfile from '../../../assets/image/reviewerProfile.jpg'
import reviewerAxios from '../../../axios/reviewerAxios'
function ReviewerProfile({type}) {
  const [userData , setUserData] = useState({})
  const id = "64d22fa18b2b5d86edd4aa05";
  const dob = new Date(userData?.dob);
  const formattedDate = dob.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})
  useEffect(() => {
    reviewerAxios.get(`/profile/${id}`, )
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
      <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg max-w-3xl p-5 ">
        {/* image */}
        <div className="sm:block hidden w-1/2 rounded-2xl overflow-hidden">
          {/* Add the "rounded" class to apply the border radius */}
          <img className="rounded-2xl" src={reviewerProfile} alt="" />
        </div>

        {/* form */}
        <div className="sm:w-1/2 px-3 ">
         <h1 className="font-bold text-xl text-shadow mb-4 ml-2">PROFILE </h1>
          <h1 className='m-2'>full name : <b>{userData?.name}</b></h1>
          <hr />
          <h1 className='m-2'>Domain: <b>{userData?.domain?.name}</b></h1>
          <hr />
          <h2 className='m-2'>date of birth : <b>{formattedDate}</b> </h2>
          <hr />
          <h2 className='m-2'> gender : <b>{userData?.gender}</b></h2>
          <hr />
          <h2 className='m-2'> number : <b>{userData?.number}</b></h2>
          <hr />
          <h2 className='m-2'> address : <b>{userData?.address}</b></h2>
          <hr />
          <h2 className='m-2'> qualification : <b>{userData?.qualification}</b></h2>
          <hr/>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ReviewerProfile
