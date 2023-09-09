import React from 'react';
import moment from 'moment';

function WeekDetailsBox({ userData, reviewData }) {
  const targetDate = moment(reviewData?.date);
  const currentDate = moment();
  const daysLeft = targetDate.diff(currentDate, 'days');
  const formattedDate = moment(reviewData?.date).format('ddd MMM D');
  console.log(reviewData);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg sm:w-2/12 lg:w-1/12 text-center items-center mx-2 p-2 justify-center">
        <h1 className="font-bold text-base lg:text-4xl ">
          {userData?.week < 10 ? `0${userData?.week}` : userData?.week}
        </h1>
        <h2 className="font-bold text-xs lg:text-base py-2">week</h2>
        <h2 className="text-red-600 font-medium text-xs">Next Review</h2>
        <h2 className="font-bold text-xs">
          {formattedDate} {/* Display the formatted date */}
        </h2>
        <h2 className="font-semibold text-xs">
          {daysLeft > 0 ? `(${daysLeft} days left)` : daysLeft === 1 ? 'Tomorrow' : 'Today' } {/* Display the countdown */}
        </h2>
      </div>
    </>
  );
}

export default WeekDetailsBox;
