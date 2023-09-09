import React, { useEffect, useState } from "react";
import { reviewerList,  reviewslistForbooking } from "../../services/advisor/reviews";
import ReviewsToBeSchedule from "../../components/advisor/schedule/ReviewsToBeSchedule";
import BookSlotBox from "../../components/advisor/BookSlotBox";
import Navbar from "../../components/common/nav/Navbar";

function AdvisorScheduleReviews() {
  const [review, setReviewData] = useState([]);
  const [reviewer, setReviewer] = useState([]);
  useEffect(() => {
    fetchReviewerList();
    reviewList();
  }, []);
  const reviewList = async () => {
    const res = await reviewslistForbooking("booking" , );
    console.log(res);
    setReviewData(res);
  };
  const fetchReviewerList = async () => {
    const res = await reviewerList()
    setReviewer(res)
  };
  return (
    <div>
      <Navbar type={"advisor"} />
      <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen items-center justify-center pt-20">
          <div className="flex shadow rounded">
            <ReviewsToBeSchedule reviews={review} />
            <BookSlotBox reviewers={reviewer } student={review}/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdvisorScheduleReviews;
