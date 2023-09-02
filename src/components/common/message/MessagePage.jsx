import React from 'react'
import Navbar from '../nav/Navbar'
import Chat from '../message/Chat'
import Chats from '../message/Chats'
function MessagePage({type}) {
    const user = type
  return (
    <div>
      <Navbar type={user}/>
      <div className="lg:ml-64 mt-16 items-center">
        <section className="bg-gray-50 min-h-screen  items-center justify-center w-full pt-5">
            <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl  p-5'>
                <Chats/>
                <Chat/>
            </div>
        </section>
      </div>
    </div>
  )
}

export default MessagePage
