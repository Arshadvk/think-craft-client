import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { fetchSlotDetails } from '../../services/reviewer/review';

function SlotListingBox({slots}) {
  const [filterdSlots, setFilterdSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState("today");
  const [isSlotClicked, setIsSlotClicked] = useState(false);
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
  }, [slots]);

  
  return (
    <div className='w-1/2 p-10 shadow-2xl rounded-3xl m-2'>
   
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
    </div>
  
    </div>
  )
}

export default SlotListingBox
