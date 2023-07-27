import React, { useState } from 'react';
import adminLogin from '../../../assets/image/adminLogin.jpg';
import adminAxios from "../../../axios/adminAxios"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ErrMsg, setErrMsg] = useState('');

  const LoginFormPost = (e)=>{
    e.preventDefault();
    adminAxios.post('/login' ,{email,password}).then((res)=>{
        const result = res.data
        console.log(result);
        if (result.status) {
            const token = result;
            
        }
    })
  }

  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg max-w-3xl p-5">
          {/* image */}
          <div className="sm:block hidden w-1/2 rounded-2xl overflow-hidden">
            {/* Add the "rounded" class to apply the border radius */}
            <img className="rounded-2xl" src={adminLogin} alt="" />
          </div>

          {/* form */}
          <div className="sm:w-1/2 px-16">
            <h1 className="font-bold text-2xl">Login</h1>
            <p className="text-sm mt-4">if you already a member, easily login</p>
            <form action="POST" onSubmit={LoginFormPost} className="flex flex-col gap-4">
              <input
                type="email"
                className="p-2 mt-8 rounded-xl border text-xs"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="please enter your email"
              />
              <div className="relative">
                <input
                  type="password"
                  className="p-2 rounded-xl border w-full text-xs"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="please enter your password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill absolute top-1/3 right-3 "
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              </div>

              <button
                type="submit"
                className="py-2 rounded-xl border bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:drop-shadow-xl"
              >
                Login
              </button>
              {ErrMsg.length > 0 && (
                <div>
                  <p style={{ color: 'red' }}>{ErrMsg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
