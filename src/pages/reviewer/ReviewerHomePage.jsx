import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/nav/Navbar";
import ReviewCard from "../../components/reviewer/ReviewCard";
import { fetchHomePageReviewList } from "../../services/reviewer/review";
import { useErrorHandler } from "../../hooks/ErrorHandler";

function ReviewerHomePage() {
  const [reviewData, setReviewData] = useState([]);
  const { reviewerAutheticationHandler } = useErrorHandler();
  useEffect(() => {
    const reviewList = async () => {
      try{
        const res = await fetchHomePageReviewList();
        setReviewData(res);

      }catch(error){
        console.log(error);
        reviewerAutheticationHandler(error)
      }
    };
    reviewList();
  }, []);
  return (
    <div>
      <Navbar type={"reviewer"} />
      <div className="lg:ml-64">
        <section className="min-h-screen items-center justify-center pt-20">
          <ReviewCard reviewData={reviewData ? reviewData : []} />
        </section>
      </div>
    </div>
  );
}

export default ReviewerHomePage;
