import moment from 'moment';
import React from 'react';

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
          <div key={index} className='bg-gray-600 font-semibold text-sm p-2 rounded m-2' onClick={()=> handleSelectStudent(obj) }>
            <h1>
              { obj?.student?.name},{'week '+ obj?.student?.week},{obj?.student?.domain?.name} ,{obj?.date}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewsToBeSchedule;
