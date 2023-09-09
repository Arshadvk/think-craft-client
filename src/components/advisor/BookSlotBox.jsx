import React, { useEffect, useState } from "react";
import {
  bookSlot,
  findSlot,
  reviewslist,
} from "../../services/advisor/reviews";
import moment from "moment";
import SelectStudent from "../common/slot-booking/SelectStudent";
import SelectReviewer from "../common/slot-booking/SelectReviewer";
import { toast } from "react-toastify";
import SlotBox from "./SlotBox";

function BookSlotBox({ reviewers, student }) {
  console.log(reviewers);
  const [showSlot, setShowSlot] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  const [filterdSlots, setFilterdSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState("today");
  const [isSlotClicked, setIsSlotClicked] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectSlot, setSelectSlot] = useState("");
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
  const thirdDay = moment().add(2, "days").format("YYYY-MM-DD");
  const handleSlotClicked = (slot) => {
    setSelectSlot(selectSlot === slot ? "" : slot);
    console.log(slot);
    setIsSlotClicked(selectSlot === slot ? false : true);
  };
  const selectDate = (date, day) => {
    setSelectedDay(day);
    const fltrSlots = slots?.filter((slots) => slots.slot_date === date);
    setFilterdSlots(fltrSlots);
  };
  useEffect(() => {
    const fltrSlots = slots?.filter((slot) => slot.date === today);
    console.log("slots", fltrSlots);
    setFilterdSlots(fltrSlots);
  }, [slots ]);

  // Handle select input change
  const handleReviewerSelectChange = (event) => {
    setShowSlot(true);
    fetchSlotHelper(event.target.value);
    setSelectedReviewer(event.target.value);
  };

  const handleStudentSelectChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleBookSlot = (e) => {
    console.log("student", selectedStudent);
    if (selectedStudent) {
      if (selectedReviewer) {
        if (selectSlot) {
          const value = {
            reviewId: selectedStudent,
            reviewer: selectedReviewer,
            slot: selectSlot,
          };
          bookSlotHelper(value);
          console.log(value);
        }
      } else if (selectedReviewer === "") {
      }
    } else if (selectedStudent === "") {
    }
  };

  const bookSlotHelper = async (value) => {
    try {
      const data = await bookSlot(value);
      if (data) {
        toast.success("book slot successfully.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const fetchSlotHelper = async (id) => {
    try {
      const response = await findSlot(id);
      setSlots(response.length === 0 ? [] : response);
      console.log(response);
    } catch (error) {
      console.log("error", error.response);
    }
  };

  return (
    <div className="w-1/2 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl m-3 p-3 text-white">
      <h1 className="text-white font-semibold">reviews to be schedule:</h1>
      <SelectStudent
        handleStudentSelectChange={handleStudentSelectChange}
        selectedStudent={selectedStudent}
        student={student}
      />
      <SelectReviewer
        handleReviewerSelectChange={handleReviewerSelectChange}
        reviewers={reviewers}
        selectedReviewer={selectedReviewer}
      />
      {showSlot && 
        <SlotBox
          filterdSlots={filterdSlots}
          handleBookSlot={handleBookSlot}
          handleSlotClicked={handleSlotClicked}
          isSlotClicked={isSlotClicked}
          selectDate={selectDate}
          selectSlot={selectSlot}
          selectedDay={selectedDay}
          setIsSlotClicked={setIsSlotClicked}
          thirdDay={thirdDay}
          today={today}
          tomorrow={tomorrow}
        />
      }{" "}
    </div>
  );
}


export default BookSlotBox;
