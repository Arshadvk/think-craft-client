import React from "react";

function SlotBox({
  selectedDay,
  selectDate,
  today,
  setIsSlotClicked,
  tomorrow,
  thirdDay,
  filterdSlots,
  selectSlot,
  handleSlotClicked,
  isSlotClicked,
  handleBookSlot,
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between gap-2 py-[10px]">
          <div
            className="flex flex-col justify-center items-center "
            onClick={() => {
              selectDate(today, "today");
              setIsSlotClicked(false);
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
            onClick={() => {
              selectDate(tomorrow, "tomorrow");
              setIsSlotClicked(false);
            }}
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
              selectDate(thirdDay, "thirdDay");
              setIsSlotClicked(false);
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
                className={
                  slot?.isBooked === true
                    ? "bg-zinc-700 p-2 text-white rounded"
                    : selectSlot == slot?._id
                    ? "bg-zinc-700 p-2 text-white rounded"
                    : "border border-gray-500 p-2 rounded"
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
        {isSlotClicked && (
          <div>
            <div className="flex">
              <div className="w-10/12"></div>
              <div></div>
              <div className="">
                <button
                  className="bg-black rounded-md p-2 m-1 w-full"
                  onClick={handleBookSlot}
                >
                  book slot
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SlotBox;
