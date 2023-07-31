import React, { useState } from "react";
import studentLogin from "../../../assets/image/studentLogin.jpg";
import { useNavigate } from "react-router-dom";
import studentAxios from "../../../axios/studentAxios";
import { useDispatch } from "react-redux";
import { IsStudentLogin } from "../../../redux/student/studentAuth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setErrorMessage("");
      if (password) {
        setErrorMessage2("");
        studentAxios.post("/login", { email, password }).then((res) => {
          const result = res.data.message;
          console.log(result);
          console.log("fhjdsghf");

          if (result.status) {
            const token = result.token;
            dispatch(IsStudentLogin({ token: token }));
            navigate("/");
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
  };
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
          {/* image */}

          <div className="sm:block hidden w-1/2">
            <img className="rounded-2xl" src={studentLogin} alt="" srcset="" />
          </div>

          {/* form*/}
          <div className="sm:w-1/2 px-16 ">
          <h1 className="font-extrabold text-2xl text-shadow text-center">
          THINK CRAFT <span className="text-xs">STUDENT</span>
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
                className="p-2 mt-8 rounded-xl border"
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
                  className="p-2 rounded-xl border w-full"
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
                  className="bi bi-eye-fill absolute top-1/3 right-3 hover:cursor-pointer"
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
              <h3 className="text-end text-xs hover:drop-shadow-xl hover:cursor-pointer"> Forgot password ?</h3>
              
              <button
                type="submit"
                className="py-2 text-white font-bold rounded-xl border bg-[#92959c] hover:bg-[#6b6e74] active:bg-[#434549] focus:outline-none focus:ring focus:ring-[#323335] hover:drop-shadow-xl "
              >
                {" "}
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
