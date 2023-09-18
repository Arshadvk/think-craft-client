import moment from 'moment';
import React from 'react';
import studnetProfile from '../../../assets/image/profile student.jpg'
function ReviewsToBeSchedule({ reviews }) {
  const reviewsData = reviews?.map((obj) => {
    
    const newObj = {
      ...obj,
      reviews: [
        {
          ...obj,
          date: moment(obj?.date).format('YYYY-MM-DD'), 
        },
      ],
    };
    return newObj;
  });
  
  const  handleSelectStudent = (student)=>{
    console.log(student);
  }
  return (
    <div className='w-1/2 border-gray-200 min-h-screen rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl m-3 p-3'>
      <h1 className='text-white font-semibold'>reviews to be schedule:</h1>
      {reviewsData?.map((obj, index) => {
        return (
          <div key={index} className='bg-gray-600 font-semibold text-sm p-2 rounded m-2 flex items-center' onClick={()=> handleSelectStudent(obj) }>
            <img src={studnetProfile} className='w-16 h-16 rounded-2xl mr-2 shadow-2xl' alt="" srcset="" />
            <h1 className='text-xs font-semibold text-white text-shadow'>
            <h1>name : { obj?.student?.name} </h1>
              <h1>week  : {'week '+ obj?.student?.week} </h1>
              <h1>domain : {obj?.student?.domain?.name}  </h1>
              <h1>date : {obj?.date} </h1>
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewsToBeSchedule;
