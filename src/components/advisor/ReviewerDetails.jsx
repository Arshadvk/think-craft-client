import React from 'react'
import reviewerProfile from '../../assets/image/reviewerProfile.jpg'
function ReviewerDetails({reviewer}) {
  return (
   <div className='shadow rounded-xl w-1/2 m-3 p-4 gap-1 justify-center pl-6'>
    <img className='w-2/3' src={reviewerProfile} alt="" srcset="" />
    <h1 className='pt-4 font-sans font-semibold text-base'>Name :  {reviewer?.name}</h1>
    <h1 className='font-sans font-semibold text-base'>Domain :  {reviewer?.domain?.name}</h1>
   </div>
  )
}

export default ReviewerDetails
