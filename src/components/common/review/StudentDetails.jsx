import React, { useState } from "react";
import moment from "moment"; // Import moment library
import studentProfile from '../../../assets/image/profile student.jpg'
function StudentDetails({ student, user, review }) {
  const [showInput, setShowInput] = useState(false);

  // Assuming review.date is in the format "Tue Sep 12 2023 16:48:00 GMT+0530 (India Standard Time)"
  const formattedDate = moment(review?.date).format("ddd MMM D YYYY");

  return (
    <div className="shadow p-3 rounded">
      <h1 className="text-sm font-bold bg-black p-1 rounded w-4/12 text-white text-center">Student Details</h1>
      <div className="flex">

      <div className="ml-3 w-1/2 pt-2 justify-center">
        <div className="w-1/2">
        <img src={studentProfile} className="rounded-full shadow-xl" alt="" />
        </div>
      </div>
      <div className="w-1/2 font-semibold text-sm">
      
        <h1>name : {student?.name}</h1>
        <h1>week : {student.week < 10 ? "0" + student?.week : student?.week}</h1>
        <h1>domain : {student?.domain?.name}</h1>
        <h1>advisor : {review?.advisor?.name}</h1>
        <h1>reviewer : {review?.reviewer?.name} </h1>
        <h1>date : {formattedDate}</h1>
      </div>
      </div>
    </div>
  );
}

export default StudentDetails;
