import React from 'react';

const AdvisorProfile = () => {

  return (

     <div>
       {/* Main Content */}
       <div className={`ml-64 p-8 `}>
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://via.placeholder.com/100"
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">@johndoe</p>
          </div>
        </div>
        <p className="text-gray-800">
          Hello! I'm John Doe, a software engineer who loves coding and building
          cool stuff with React and Tailwind CSS.
        </p>
        {/* Add more profile content here */}
      </div>
     </div>

     
   
  );
};

export default AdvisorProfile;