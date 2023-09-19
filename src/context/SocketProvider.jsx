import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const ENDPOINT = "https://egoft.shop";
// const ENDPOINT = 'http://localhost:5000'

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = io(ENDPOINT);
  return socket;
};

// export const useSocket = () => {
//   const socket = useContext(SocketContext);
//   return socket;
// };

// const socket = io('http://localhost:4000');

const ContextProvider = ({ children }) => {
  const socket = useMemo(() => io(ENDPOINT), []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
