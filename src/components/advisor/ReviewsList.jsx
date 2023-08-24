import moment from "moment";
import React, { useEffect, useState } from "react";
import UserCard from "../common/card/UserCard";
import reviewerImage from "../../assets/image/reviewerProfile.jpg";
import { reviewslist } from "../../services/advisor/reviews";
import { useNavigate } from "react-router-dom";

function ReviewsList() {
  const navigate = useNavigate()
  const [reviewData, setReviewData] = useState([]);
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
  const thirdDay = moment().add(2, "days").format("YYYY-MM-DD");

  useEffect(() => {
    const reviewList = async () => {
      const res = await reviewslist();
      console.log(res);
      setReviewData(await res?.data);
    };
    reviewList();
  }, []);
  const handleBookSlot = (domain)=>{
    navigate(`/advisor/reviewer-list/${domain}`)
  }
  console.log(reviewData);
  return (

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {reviewData?.map((obj) => {
          return (
            <div className="col-span-1 pt-4 bg-white border mx-2 border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
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
                  {obj?.student?.week < 10 ? `week : 0${obj?.student?.week}`: "" }
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {obj?.student?.domain?.name}
                </span>
                <div className="flex mt-4 space-x-1 md:mt-6">
                  <button
                    onClick={()=>handleBookSlot(obj?.student?.domain?._id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >{obj?.reviews[0]?.status === false  ? "Book slot" : "Start Review"}
                    
                  </button>
                  <button
                    onClick={handleBookSlot}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

  );
}

export default ReviewsList;
