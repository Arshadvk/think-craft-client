import React, { useState } from "react";
import advisorLoginImage from "../../../assets/image/advisorLoginImage.jpg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrMsg, setErrMsg] = useState("");

  const LoginFormPost = (e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg max-w-3xl p-5">
          {/* image */}
          <div className="sm:block hidden w-1/2 rounded-2xl overflow-hidden">
            {/* Add the "rounded" class to apply the border radius */}
            <img className="rounded-2xl" src={advisorLoginImage} alt="" />
          </div>

          {/* form */}
          <div className="sm:w-1/2 px-16">
            <h1 className="font-extrabold text-3xl text-shadow text-center">BROCAMP <span className="text-xs">ADVISOR</span></h1>
            <br />
            <h1 className="font-bold text-xl text-center text-shadow ">LOGIN</h1>
           
            <form
              action="POST"
              onSubmit={LoginFormPost}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                className="p-2 mt-7 rounded-lg border text-xs"
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
                  className="p-2 rounded-lg border w-full text-xs"
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
                  className="bi bi-eye-fill absolute top-1/4 right-3 "
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              </div>

              <button
                type="submit"
                className="py-2 font-bold text-slate-100 rounded-xl border bg-[#60b0e1be] hover:bg-[#60b0e1be] bg-[#60b0e1be] focus:outline-none focus:ring focus:ring-[#60b0e1be] hover:drop-shadow-xl"
              >
                LOGIN
              </button>
              {ErrMsg.length > 0 && (
                <div>
                  <p style={{ color: "red" }}>{ErrMsg}</p>
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
