import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import UserCard from "../common/card/UserCard";
import reviewerImage from "../../assets/image/reviewerProfile.jpg";
import { reviewslist } from "../../services/advisor/reviews";
import { useNavigate } from "react-router-dom";
import {useSocket} from '../../context/SocketProvider'

function ReviewCard({reviewData}) {
  
  const navigate = useNavigate()
  const socket = useSocket()
  console.log(reviewData);
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
  const thirdDay = moment().add(2, "days").format("YYYY-MM-DD");
  console.log(socket);


  const handleStartReview = useCallback((email , room) =>{
        socket.emit("room:join" , {email , room});
    },
    [socket]
  )

 const handleJoinRoom = useCallback((data)=> {
    const {email , room} = data
    console.log(email ,room);
    navigate(`/reviewer/call/${room}`)
 } ,[])


  useEffect(()=>{
    socket.on("room:join" , handleJoinRoom)
    return ()=>{
        socket.off("room:join" , handleJoinRoom)
    }

  },[socket])  
  return (

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {reviewData?.map((obj) => {
          return (
            <div className="col-span-1 pt-4 m-3 bg-white border mx-2 border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={reviewerImage}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {obj?.student?.name}
                </h5> 
                <h5 className="mb-1 text-base font-normal text-gray-900 dark:text-white">
                  {obj?.week < 10 ? `week : 0${obj?.week}`: "" }
                </h5>
                <div className="flex mt-4 space-x-1 md:mt-6">
                  <button
                    onClick={()=>handleStartReview(obj?.reviewer?.email ,obj._id) }
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >{obj?.status === "not-scheduled"  ? "Book slot" : "Start Review"}
                    
                  </button>
                  <button
                    onClick={()=>navigate(`/reviewer/review-details/${obj?._id}`)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                   View 
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

  );
}

export default ReviewCard;
