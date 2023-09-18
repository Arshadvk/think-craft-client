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
            {/* ... (previous month button) */}
          </button>
          <h2 className="text-xl">
            {/* ... (month and year display) */}
          </h2>
          <button
            onClick={() =>
              setDate(new Date(date.getFullYear(), date.getMonth() + 1))
            }
          >
            {/* ... (next month button) */}
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
