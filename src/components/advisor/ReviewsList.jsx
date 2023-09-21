import React, { useEffect, useState } from "react";
import reviewerImage from "../../assets/image/reviewerProfile.jpg";
import { reviewslist } from "../../services/advisor/reviews";
import { useNavigate } from "react-router-dom";
import { useErrorHandler } from "../../hooks/ErrorHandler";

function ReviewsList() {
  const navigate = useNavigate();
  const [reviewData, setReviewData] = useState([]);
  const { advisorAutheticationHandler } = useErrorHandler();
  useEffect(() => {
    const reviewList = async () => {
      try {
        const res = await reviewslist();
        setReviewData(res);
      } catch (error) {
        if (error?.response?.status === 401) {
          advisorAutheticationHandler(error);
        }
      }
    };
    reviewList();
  }, []);
  const handleBookSlot = () => {
    navigate(`/advisor/review-schedule`)
  };
  console.log(reviewData);
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
                {obj?.week < 10 ? `week : 0${obj?.week}` : ""}
              </h5>
              <div className="flex mt-4 space-x-1 md:mt-6">
                <button
                  onClick={() => handleBookSlot()}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {obj?.status === "not-scheduled"
                    ? "Book slot"
                    : "Update Review"}
                </button>
                <button
                  onClick={() =>
                    navigate(`/advisor/review-details/${obj?._id}`)
                  }
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

export default ReviewsList;
