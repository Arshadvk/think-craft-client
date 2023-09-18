import React, { useCallback, useEffect } from "react";
import advisorImage from "../../assets/image/advisorProfile.jpg";
import { useSocket } from "../../context/SocketProvider";
import { useNavigate } from "react-router-dom";

function AdvisorCard({ reviewData, student }) {
  const socket = useSocket();
  const navigate = useNavigate();
  const handleJoinReview = useCallback(
    (email, room) => {
      socket.emit("room:join", { email, room });
    },
    [socket]
  );

  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data;
    console.log("data from backend", email, room);
    navigate(`/call/${room}`);
  });

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket]);
  return (
    <div className=" col-span-1 p-6  items-center  rounded-3xl mb-1">
      <div className="flex flex-col items-center ">
        <img
          className="w-24 h-24 mb-3 rounded-3xl shadow-lg"
          src={advisorImage}
          alt=""
        />
        <button
          
          onClick={() => handleJoinReview(student?.email, reviewData?._id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-950 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-900 "
          >
           Join into review
        </button>
      </div>
    </div>
  );
}

export default AdvisorCard;
