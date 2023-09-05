import React, { useEffect, useState } from "react";
import { bookSlot, findSlot, reviewslist } from "../../services/advisor/reviews";
import moment from "moment";
import SelectStudent from "../common/slot-booking/SelectStudent";
import SelectReviewer from "../common/slot-booking/SelectReviewer";
import { toast } from "react-toastify";

function BookSlotBox({ reviewers  , student }) {
  console.log(reviewers);
  const [showSlot, setShowSlot] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState("");
  const [selectedStudent , setSelectedStudent] = useState("")
  const [filterdSlots, setFilterdSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState("today");
  const [isSlotClicked, setIsSlotClicked] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectSlot , setSelectSlot] = useState('')
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
  const thirdDay = moment().add(2, "days").format("YYYY-MM-DD");
  const handleSlotClicked = (slot) => {
    setSelectSlot(selectSlot === slot ? "" : slot)
    console.log(slot);
    setIsSlotClicked( selectSlot === slot ? false : true);
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
  }, [slots]);

  // Handle select input change
  const handleReviewerSelectChange = (event) => {
    setShowSlot(true);
    fetchSlotHelper(event.target.value);
    setSelectedReviewer(event.target.value);
  };

  const handleStudentSelectChange = (event) =>{
    setSelectedStudent(event.target.value);
  }

  const handleBookSlot = (e) =>{
    console.log("student" , selectedStudent);
    if(selectedStudent){
      if(selectedReviewer){
        if(selectSlot){
          const value = {
            student : selectedStudent ,
            reviewer : selectedReviewer ,
            slot : selectSlot
          }
          bookSlotHelper(value)
          console.log(value);
        }
      }else if(selectedReviewer === '') {

      }
    }else if (selectedStudent === ''){

    }
  }

  const bookSlotHelper = async (value) =>{
    try {
      const data = await bookSlot(value)
      if (data) {
        toast.success('book slot successfully.');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

  }
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
   

      <SelectStudent handleStudentSelectChange={handleStudentSelectChange} selectedStudent={selectedStudent}student={student} />
      
      <SelectReviewer handleReviewerSelectChange={handleReviewerSelectChange} reviewers={reviewers} selectedReviewer={selectedReviewer} />
      
      {showSlot && (
        <div>
          <div className="flex flex-col">
            <div className="flex justify-between gap-2 py-[10px]">
              <div
                className="flex flex-col justify-center items-center "
                onClick={() => {
                  selectDate(today, "today");
                  setIsSlotClicked(false );
                }}
                >
                <h2 className="font-medium cursor-pointer ">Today</h2>
                <div className="w-full py-[2px]">
                  {selectedDay === "today" && (
                    <hr
                      style={{ borderTop: " 4px solid green" }}
                      className="w-full "
                    />
                  )}
                </div>
              </div>

              <div
                className="flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>{
                  selectDate(tomorrow, "tomorrow") 
                  setIsSlotClicked(false );}
                } 
              >
                <h2 className="font-medium ">Tomorrow</h2>
                <div className="w-full py-[2px]">
                  {selectedDay === "tomorrow" && (
                    <hr
                      style={{ borderTop: " 4px solid green" }}
                      className="w-full "
                    />
                  )}
                </div>
              </div>

              <div
                className="flex flex-col justify-center items-center cursor-pointer"
                onClick={() => {
                  selectDate(thirdDay, "thirdDay")
                  setIsSlotClicked(false );
                }}
              >
                <h2 className="font-medium ">{thirdDay}</h2>
                <div className="w-full py-[2px]">
                  {selectedDay === "thirdDay" && (
                    <hr
                      style={{ borderTop: " 4px solid green" }}
                      className="w-full "
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-[10px]">
              {filterdSlots?.map((slot) => {
                return (
                  <button
                    className={slot?.isBooked === true ? "bg-zinc-700 p-2 text-white rounded"  : selectSlot == slot?._id ?  "bg-zinc-700 p-2 text-white rounded"  : "border border-gray-500 p-2 rounded"
                    }
                    onClick={
                      slot?.isBooked === false
                        ? () => handleSlotClicked(slot?._id)
                        : ""
                    }
                    >
                    {slot?.slot_time}
                  </button>
                );
              })}
            </div>
            {isSlotClicked && <div>
              <div className="flex">
              <div className="w-10/12"></div>
              <div></div>
              <div className="">

              <button className="bg-black rounded-md p-2 m-1 w-full" onClick={handleBookSlot} >
                book slot
              </button>
              </div>
              </div>
              </div>}
          </div>
        </div>
      )}{" "}
              
    </div>
  );
}

export default BookSlotBox;
