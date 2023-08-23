import React from 'react'
import advisorImage from '../../assets/image/advisorProfile.jpg'
function AdvisorCard() {
  return (
    <div className="flex items-center justify-center mt-5">
     <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg w-9/12 p-2 ">
        <div className=" w-2/2 lg:w-2/12  rounded-2xl overflow-hidden shadow-2xl ">
          <img className="rounded-2xl  mb-1" src={advisorImage} alt="" />
          <div className="items-end  relative"></div>
        </div>
        <div className="sm:w-3/4 px-3 flex items-center ">
          <h1 className="w-full font-semibold ">
            Dheelip kumar
          </h1>
          <div className="justify-end  mr-16 mt-2">
            <button
              className="bg-black text-white rounded-xl px-5 py-2"
             
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvisorCard
