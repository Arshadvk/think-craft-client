import React, { useState } from "react";
import ReviewerLoginImage from "../../../assets/image/ReviewerLoginImage.jpg";
import  reviewerAxios  from "../../../axios/reviewerAxios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {IsReviewerLogin} from '../../../redux/reviewer/reviewerAuth'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const dispatch = useDispatch()
  const navigate =  useNavigate()

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (email) {
      setErrorMessage("");
      if (password) {
        setErrorMessage2("");
        reviewerAxios.post("/login", { email, password }).then((res) => {
          const result = res.data.message;
          console.log(result);
          console.log("fhjdsghjhnf");

          if (result.status) {
            const token = result.token;
            dispatch(IsReviewerLogin({token:token}));
            navigate("/reviewer");
          } else {
            setErrorMessage2(result.message);
          }
        });
      } else {
        setErrorMessage2("please enter your password");
      }
    } else {
      setErrorMessage("please enter your email");
    }

  }
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg max-w-3xl p-5">
          {/* image */}
          <div className="sm:block hidden w-1/2 rounded-2xl overflow-hidden">
            {/* Add the "rounded" class to apply the border radius */}
            <img className="rounded-2xl" src={ReviewerLoginImage} alt="" />
          </div>

          {/* form */}
          <div className="sm:w-1/2 px-16">
          <h1 className="font-extrabold text-3xl text-shadow text-center">
              BROCAMP <span className="text-xs">REVIEWER</span>
            </h1>
            <br />
            <h1 className="font-bold text-xl text-center text-shadow ">
              Set Password
            </h1>
            <form
              action="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
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
                {errorMessage && (
                <span className="text-red-500 text-xs">{errorMessage}</span>
              )}       
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
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
              <h3 className="text-end text-xs"> Forgot password ?</h3>

              <button
                type="submit"
                className="py-2 text-slate-50 font-bold rounded-xl border bg-[#132D46] hover:bg-[#0a1e31] active:bg-[#041524] focus:outline-none focus:ring focus:ring-[#86c5ff] hover:drop-shadow-xl"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
