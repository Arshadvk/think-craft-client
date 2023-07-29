import React, { useState } from 'react';
import adminAxios from '../../../axios/adminAxios';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student'); // Default role set to "student"

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adminAxios.post(`/add-${role}`, { name, email });
  };

  return (
    <div>
      <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
        <div className='bg-[FFFFFF]-100-100 flex rounded-lg shadow-xl max-w-3xl p-5'>
          <div className='px-16'>
            <h1 className='font-extrabold text-3xl text-shadow text-center'>
              ADD USER
            </h1>
            <form
              action='POST'
              onSubmit={handleSubmit}
              className='flex flex-col gap-4'
            >
              <input
                type='text'
                className='p-2 mt-7 rounded-lg border w-full' // Increase the width using w-full class
                name='name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder='Please enter your name'
              />
              <input
                type='email'
                className='p-2 rounded-lg border w-full' // Increase the width using w-full class
                name='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder='Please enter your email'
              />
              <select
                value={role}
                onChange={handleRoleChange}
                className='p-2 rounded-lg border w-full' // Increase the width using w-full class
              >
                <option value='student'>Student</option>
                <option value='advisor'>Advisor</option>
                <option value='reviewer'>Reviewer</option>
              </select>
              <button
                type='submit'
                className='py-2 font-bold text-slate-100 rounded-xl border bg-[#f18b31] hover:bg-[#fc7600] bg-[#ff7700] focus:outline-none focus:ring focus:ring-[#F4B680] hover:drop-shadow-xl'
              >
                ADD USER
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateUser;
