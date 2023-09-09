import React from 'react'
import Navbar from '../nav/Navbar'
import Chat from '../message/Chat'
import Chats from '../message/Chats'
import ChatComponent from '../../chat/ChatContainer'
function MessagePage({type}) {
    const user = type
  return (
    <div>
      <Navbar type={user}/>
      <div className="lg:ml-64 mt-12 items-center">
        <section className="bg-gray-50 min-h-screen items-center justify-center w-full pt-5">
           
                <ChatComponent />
            
        </section>
      </div>
    </div>
  )
}

export default MessagePage
