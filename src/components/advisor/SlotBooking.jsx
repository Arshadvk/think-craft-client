import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'
function SlotBooking() {
    const [filterdSlots, setFilterdSlots] = useState([])
    const [selectedDay, setSelectedDay] = useState('today')
    const selectDate = (date , day) => {
        setSelectedDay(day)
       
      
      }
    
   
    const today = moment().format("YYYY-MM-DD");
    const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
    const thirdDay = moment().add(2, "days").format("YYYY-MM-DD");
    return (
        <div className='absolute top-0 right-[34%]'>
    
          <div className=' hidden pl-[40px]   w-1/3 h-screen md:block fixed '>
    
            <div className='flex flex-col w-full gap-3 mb-[30px]'>
    
              <div>
                <h4 className='text-xl text-start font-medium txt-them'>Pick time slot</h4>
              </div>
    
              <div className='flex justify-between items-center my-2 p-3 bg-sky-400 rounded-t-md'>
                <p className='fontstyles text-sm font-medium text-gray-950 subpixel-antialiased'>Online consultation</p>
                <p className='fontstyles text-sm font-medium text-gray-950 mr-[20%] subpixel-antialiased'> fee</p>
              </div>
    
              <div className='flex flex-col gap-1'>
                <p className='fontstyles text-sm text-gray-950 subpixel-antialiased'>DR.</p>
                <div className='flex justify-between w-1/3'>
                  <p className='fontstyles text-[10px] text-yellow-600 subpixel-antialiased'></p>
                  <p className='fontstyles text-[10px] text-blue-700 subpixel-antialiased'> max 15 mins wait</p>
                </div>
              </div>
            </div>
    
            <hr className='w-full' />
    
            <div className='flex flex-col'>
    
              <div className='flex justify-between gap-2 py-[10px]'>
               
                <div
                  className='flex flex-col justify-center items-center '
                  onClick={() => { selectDate(today, 'today') }}
                >
                  <h2 className='font-medium cursor-pointer '>Today</h2>
                  <div className="w-full py-[2px]">
                    {selectedDay === 'today' && <hr style={{ borderTop: ' 4px solid green' }} className='w-full ' />}
    
                  </div>
                </div>
    
                <div
                  className='flex flex-col justify-center items-center cursor-pointer'
                  onClick={() => selectDate(tomorrow, 'tomorrow')}
                >
                  <h2 className='font-medium '>Tomorrow</h2>
                  <div className="w-full py-[2px]">
                    {selectedDay === 'tomorrow' && <hr style={{ borderTop: ' 4px solid green' }} className='w-full ' />}
                  </div>
                </div>
    
                <div
                  className='flex flex-col justify-center items-center cursor-pointer'
                  onClick={() => selectDate(thirdDay, 'thirdDay')}
                >
                  <h2 className='font-medium '>{thirdDay}</h2>
                  <div className="w-full py-[2px]">
                    {selectedDay === 'thirdDay' && <hr style={{ borderTop: ' 4px solid green' }} className='w-full ' />}
    
                  </div>
                </div>
    
              </div>
    
              <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-[10px]'>
               
    
    
              </div>
            </div>
          </div>
          
        
        </div>
      )
}

export default SlotBooking
