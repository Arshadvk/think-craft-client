import React from 'react';
import ChatHeader from './ChatHeader';
import Chats from './Chats';
import SingleChat from './SingleChat';

function ChatComponent() {
  return (
    <>

<div class="container mx-auto shadow-lg rounded-lg w-full">
     
   <ChatHeader />
   
    <div class="flex flex-row justify-between bg-white">
    
      <Chats />
    
      <SingleChat />
      </div>
    </div>
    </>
  );
}

export default ChatComponent;
