import React, { useState } from "react";
import adminLogin from "../../../assets/image/adminLogin.jpg";
import adminAxios from "../../../axios/adminAxios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setErrorMessage("");
      if (password) {
        setErrorMessage2("");
        adminAxios.post("/login", { email, password }).then((res) => {
          const result = res.data
          console.log(result);
          navigate('/admin/')
          if (result.status) {
            const token = result;
          }
        })
      } else {
        setErrorMessage2("please enter your password");
      }
    } else {
      setErrorMessage("please enter your email");
    }
    
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
            <h1 className="font-extrabold text-3xl text-shadow text-center">
              BROCAMP <span className="text-xs">ADMIN</span>
            </h1>
            <br />
            <h1 className="font-bold text-xl text-center text-shadow ">
              LOGIN
            </h1>
            <form
              action="POST"
              onSubmit={handleSubmit}
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
                {errorMessage && (
                <span className="text-red-500 text-xs">{errorMessage}</span>
              )}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
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
                  className="bi bi-eye-fill absolute top-1/4 right-3 cursor-pointer"
                  viewBox="0 0 16 16"
                  onClick={handlePasswordVisibility}
                >
                  <path d={
                      showPassword
                        ? "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                        : "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
                    }/>
                  <path  d={
                      showPassword
                        ? "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                        : "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
                    }
                  />
                </svg>
                
              </div>
               {errorMessage2 && (
                <span className="text-red-500 text-xs">{errorMessage2}</span>
              )}
              <h3 className="text-end text-xs "> Forgot password ?</h3>
              <button
                type="submit"
                className="py-2 font-bold text-slate-100 rounded-xl border bg-[#f18b31] hover:bg-[#fc7600] bg-[#ff7700] focus:outline-none focus:ring focus:ring-[#F4B680] hover:drop-shadow-xl"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
