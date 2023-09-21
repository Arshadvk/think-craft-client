import React, { useState } from "react";


function Calendar() {
  const [date, setDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    return new Date(year, month, 0).getDate();
  };

    const daysInMonth = getDaysInMonth(date);
    const firstDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    const blanks = new Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const today = new Date(); // Get today's date
  
    return (
      <div className=" shadow-lg rounded-lg p-4 ">
        <div className="flex items-center justify-between">
          <button
            onClick={() =>
              setDate(new Date(date.getFullYear(), date.getMonth() - 1))
            }
          >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
          </button>
          <h2 className="text-xl">
            {/* ... (month and year display) */}
          </h2>
          <button
            onClick={() =>
              setDate(new Date(date.getFullYear(), date.getMonth() + 1))
            }
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mt-2 px-3 bg-black text-white rounded-lg  text-sm py-1 w-full">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 mt-2">
          {blanks.map((_, index) => (
            <div key={index} className="text-center text-gray-400">
              -
            </div>
          ))}
          {days.map((day) => (
            <div
              key={day}
              className={`text-center p-1 ${
                date.getFullYear() === today.getFullYear() &&
                date.getMonth() === today.getMonth() &&
                day === today.getDate()
                  ? 'bg-black  text-white rounded-lg' // Style for today's date
                  : ''
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
;


export default Calendar;
