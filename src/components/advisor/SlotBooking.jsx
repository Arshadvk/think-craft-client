import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import { useParams } from "react-router-dom";
import StudentSelect from '../../components/advisor/StudentSelect'

function SlotBooking({slots}) {
  const [filterdSlots, setFilterdSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState("today")
  const [isSlotClicked , setIsSlotClicked] = useState(false)

    const today = moment().format("YYYY-MM-DD");
    const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
    const thirdDay = moment().add(2, "days").format("YYYY-MM-DD");
    const handleSlotClicked = (slot) =>{
      setIsSlotClicked(isSlotClicked ? false : true)
    }
  const selectDate = (date, day) => {
    setSelectedDay(day);
    const fltrSlots = slots?.filter(slots=> slots.slot_date === date)
    setFilterdSlots(fltrSlots)
  };
  useEffect(()=>{
    const fltrSlots = slots?.filter(slot => slot.date === today) 
    console.log("slots" , fltrSlots)
    setFilterdSlots(fltrSlots)
  },[slots])
  return (
    <div className="w-1/2">
      <div className=" pl-[40px]   w-1/3 h-screen  fixed  shadow rounded-xl m-3 p-4 ">
        <div className="flex flex-col w-full mb-[30px]">
          <div>
            <h4 className="text-xl text-start font-medium txt-them">
              Pick time slot
            </h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="fontstyles text-sm text-gray-950 subpixel-antialiased"></p>
            <div className="flex justify-between w-1/3">
              <p className="fontstyles text-[10px] text-yellow-600 subpixel-antialiased"></p>
              <p className="fontstyles text-[10px] text-blue-700 subpixel-antialiased">
              </p>
            </div>
          </div>
        </div>

        <hr className="w-full" />

        <div className="flex flex-col">
          <div className="flex justify-between gap-2 py-[10px]">
            <div
              className="flex flex-col justify-center items-center "
              onClick={() => {
                selectDate(today, "today");
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
              onClick={() => selectDate(tomorrow, "tomorrow")}
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
              onClick={() => selectDate(thirdDay, "thirdDay")}
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
                  {filterdSlots?.map(slot =>{
                    return (

            <button className={slot?.isBooked === false ? "border border-gray-500 p-2 rounded" : 'bg-zinc-700 p-2 text-white rounded'}
            onClick={slot?.isBooked === false ? ()=> handleSlotClicked(slot?._id) : "" }
            >{slot?.slot_time}</button>
      
            )
          })}
          </div>
        </div>
        {isSlotClicked && <StudentSelect/>}
      </div>
    </div>
  );
}

export default SlotBooking;
