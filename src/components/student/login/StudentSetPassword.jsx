import React, { useState } from "react";
import setpassword from "../../../assets/image/setpassword.jpg";
import studentAxios from "../../../axios/studentAxios"
import { useNavigate, useParams } from "react-router-dom";

function StudentSetPassword() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.trim() === ""){setErrorMessage("please enter vaild password")}
    else{
        if (password.trim().length < 8 ) {
            setErrorMessage("Passwords should be 8 characters long");
          } else {
            setErrorMessage("");
            if (password !== password1) {
              setErrorMessage2("Password must be same");
            } else {
              setErrorMessage2("");
                studentAxios.put(`/setpassword/${id}`,{password}).then((res)=>{
                    const result = res.data;
                    console.log(result);
                    navigate(`/set-profile/${id}`)
                }).catch((error)=>{
                  setErrorMessage2(error.message)
                })
            }
          }
    }
    
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handlePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
          {/* image */}
          <div className="sm:block hidden w-1/2">
            <img className="rounded-2xl" src={setpassword} alt="" srcset="" />
          </div>

          {/* form*/}
          <div className="sm:w-1/2 px-16 ">
            <h1 className="font-extrabold text-3xl text-shadow text-center">
              BROCAMP <span className="text-xs">STUDENT</span>
            </h1>
            <br />
            <h1 className="font-bold text-xl text-center text-shadow ">
              Set Password
            </h1>
            <form
              action="POST"
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="p-2 mt-5 rounded-xl border w-full"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="new password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash-fill absolute top-1/2 right-3 "
                  viewBox="0 0 16 16"
                  onClick={handlePasswordVisibility}
                >
                  <path
                    d={
                      showPassword
                        ? "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                        : "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
                    }
                  />
                  <path
                    d={
                      showPassword
                        ? "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                        : "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
                    }
                  />
                </svg>
              </div>

              {errorMessage && (
                <span className="text-red-500 text-xs">{errorMessage}</span>
              )}
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  className="p-2 rounded-xl border w-full"
                  name="password"
                  value={password1}
                  onChange={(e) => {
                    setPassword1(e.target.value);
                  }}
                  placeholder="confirm password"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill absolute top-1/3 right-3 "
                  viewBox="0 0 16 16"
                  onClick={handlePasswordVisibility2}
                >
                  <path
                    d={
                      showPassword2
                        ? "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                        : "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
                    }
                  />
                  <path
                    d={
                      showPassword2
                        ? "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                        : "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
                    }
                  />
                </svg>
              </div>
              {errorMessage2 && (
                <span className="text-red-500 text-xs">{errorMessage2}</span>
              )}

              <button
                type="submit"
                className="py-2 rounded-xl border bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:drop-shadow-xl"
              >
                Submit
              </button>
             
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentSetPassword;
