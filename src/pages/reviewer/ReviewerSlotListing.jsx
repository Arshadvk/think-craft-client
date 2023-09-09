import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/nav/Navbar";
import BookedReviewsBox from "../../components/reviewer/BookedReviewsBox";
import SlotListingBox from "../../components/reviewer/SlotListingBox";
import { fetchSlotDetails } from "../../services/reviewer/review";

function ReviewerSlotListing() {
  const [slots, setSlots] = useState([]);
  useEffect(()=>{
    fetchSlotListHelper()
  },[])
  const fetchSlotListHelper = async () =>{
    const data = await fetchSlotDetails()
    setSlots(data) 
  }
  return (
    <div>
      <Navbar type={"reviewer"} />
      <div className="lg:ml-64 mt-10">
        <section className="bg-gray-50 min-h-screen flex  ">
          <BookedReviewsBox />
          <SlotListingBox slots={slots} />
        </section>
      </div>
    </div>
  );
}

export default ReviewerSlotListing;
