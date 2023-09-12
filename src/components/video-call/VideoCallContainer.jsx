import React, { useEffect, useState, useCallback } from "react";
import { useSocket } from "../../context/SocketProvider";
import ReactPlayer from "react-player";
import peer from "../../services/peer";
import { Phone } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function VideoCallContainer({ role }) {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [streemView, setStreemView] = useState(true);
  const [isConulted, setIsConulted] = useState(false);

  const { room } = useParams();

  const handleUserJoined = useCallback(({ email, id }) => {
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      setIsConnected(true);

      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    setStreemView(false);
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      setIsConnected(true);
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleHangUp = useCallback(() => {
    if (myStream) {
      myStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    setIsConulted(true);
    setRemoteSocketId(null);
    setMyStream(null);
    setRemoteStream(null);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);
    socket.on("call:ended", handleHangUp);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
      socket.off("call:ended", handleHangUp);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
    handleHangUp,
  ]);

  const handleUserHangup = () => {
    socket.emit("call:ended", { to: remoteSocketId });
    handleHangUp();
  };

  return (
    <div className=" p-3 flex flex-col gap-5 items-center  h-screen ">
      {!isConnected && (
        <div className="bg-slate-800 rounded-lg flex items-center justify-center shadow-sm shadow-black w-[30%] h-[50%] p-5 ">
          {!remoteSocketId ? (
            <div>
              <h1 className="text-lg font-bold font-mono my-5 text-center">
                {role === "reviewer"
                  ? "Waiting for Student to join the Room"
                  : "Waiting for Reviewer to join the Room"}
              </h1>
              <div className="flex items-center justify-center space-x-2 animate-bounce">
                <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
                <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                <div className="w-5 h-5 bg-black rounded-full"></div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col  items-center justify-center ">
              <h1 className="text-lg font-bold font-mono my-5 text-center">
                {role === "reviewer" ? " Student Joined " : " Reviewer Joined "}
              </h1>
              <button
                onClick={() => {
                  setStreemView(false);
                  setIsConnected(true);
                  handleCallUser();
                }}
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Phone />
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          )}
        </div>
      )}

      {isConulted && (
        <div className="  flex items-center justify-center w-full h-full ">
          {role === "reviewer" ? (
            <div className="bg-slate-800 rounded-lg flex items-center justify-center shadow-sm shadow-black p-5 ">
              <Button variant="contained" size="small" color="primary">
                <Link to={`/reviewer/review-details/${room}`}>
                  Update Review Details
                </Link>
              </Button>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-lg flex items-center justify-center shadow-sm shadow-black p-5 ">
              <Button variant="contained" size="small" color="primary">
                <Link to={`/review-details/${room}`}>Review Details</Link>
              </Button>
            </div>
          )}
        </div>
      )}

      <div className="w-full flex gap-[10px] ">
        <div className=" w-[50%] rounded-xl">
          {myStream && (
            <ReactPlayer
              style={{ borderRadius: "6%" }}
              playing
              muted
              height="100%"
              width="100%"
              url={myStream}
            />
          )}
        </div>

        <div className=" w-[50%] rounded-xl">
          {remoteStream && (
            <ReactPlayer
              playing
              style={{ borderRadius: "6%" }}
              height="100%"
              width="100%"
              url={remoteStream}
            />
          )}
        </div>
      </div>

      {myStream && (
        <div className="flex items-center  justify-between rounded-lg p-[10px] gap-5 bg-slate-800 ">
          {myStream && streemView && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={sendStreams}
            >
              Share Your Vedio
            </Button>
          )}
          {myStream && (
            <div onClick={handleUserHangup} className="flex items-center ">
              <Phone sx={{ fontSize: "36px" }} color="error" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default VideoCallContainer;
