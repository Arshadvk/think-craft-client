import React, { useState } from "react";
import profile from "../../../assets/image/profile student.jpg";
import advisorProfile from '../../../assets/image/advisorProfile.jpg'
import reviewerProfile from '../../../assets/image/reviewerProfile.jpg'
import { useFormik } from "formik";
import * as Yup from "yup";
import {  useEditProfile, useProfileDetails } from "../../../hooks/ProfileHandler";

function ProfileTable({type}) {
  const user = type
  const { updateProfile } = useEditProfile();
  const [userData, setUserData] = useState({});
  const [showInput, setShowInput] = useState(false);
  const dob = new Date(userData?.dob);
  const formattedDate = dob.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleSaveProfile = () => {
    updateProfile(user, userData);
    console.log("hellooooo");
    setShowInput(false);
  };
  const handleEditProfileClick = () => {
    setShowInput(true);
  };

  const formik = useFormik({
    initialValues: {
      address: userData?.address,
      number: userData?.number,
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .min(10, "Must be at least 10 numbers")
        .max(10, "Must be at less than 10 numbers")
        .required("Mobile number is required"),
        address: Yup.string().required("Address is required")
    }),
    onSubmit :(values) =>{
      console.log("jfsssh");
        console.log(values);
    }
  });
  useProfileDetails({user , setUserData})

  return (
    <div className="lg:ml-64 mt-10">
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <form className="flex flex-col gap-1"
              onSubmit={formik.handleSubmit}>
          <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg max-w-3xl p-5 ">
            <div className=" w-1/2 rounded-2xl overflow-hidden">
              <img className="rounded-2xl mt-5 mb-1" src={ user === 'student' ? profile : user === 'advisor' ? advisorProfile : reviewerProfile} alt="" />
              <div className="items-end  relative">
                <button type={showInput ? "submit" : "button"}
                
                  className="rounded-xl bg-teal-600 w-full p-1 px-4 mb-1 text-xs font-semibold"
                  onClick={
                    showInput ? handleSaveProfile : handleEditProfileClick
                  }
                >
                  <span>{showInput ? "Save" : "Edit Profile"}</span>
                </button>
                <button className="rounded-xl bg-teal-600 w-full p-1 px-4 mb-2 text-xs font-semibold">
                  <span>Change Password</span>
                </button>
              </div>
            </div>

            <div className="sm:w-1/2 px-3 ">
              <h1 className="font-bold text-xl text-shadow mb-4 ml-2">
                PROFILE{" "}
              </h1>
              <h1 className="m-2">
                full name : <b>{userData?.name}</b>
              </h1>
              <hr />
              <h1 className={user !== 'advisor' ?  "m-2" : "hidden"}>
                Domain: <b>{userData?.domain?.name }</b>
              </h1>
              <hr />
              <h2 className={user === 'student' ?  "m-2" : "hidden"}>
                {" "}
                week : <b>{userData?.week}</b>
              </h2>
              <hr className ={user === 'student' ?  "m-2" : "hidden"} />
              <h2 className="m-2">
                date of birth : <b>{formattedDate}</b>{" "}
              </h2>
              <hr />
              <h2 className="m-2">
                {" "}
                gender : <b>{userData?.gender}</b>
              </h2>
              <hr />

              <div className="">
                <h2 className="m-2">
                  {" "}
                  number :{" "}
                  <b>
                    {showInput ? (
                      <div className="mt-2">
                        <input
                          type="text"
                          value={userData?.number} // Set initial value from user data
                          onChange={(e) =>
                            setUserData({ ...userData, number: e.target.value })
                          }
                          className="block mt-1 w-28 border-gray-300 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                        />
                      </div>
                    ) : (
                      userData?.number
                    )}
                  </b>
                </h2>
              </div>
              <hr />
              <h2 className="m-2">
                {" "}
                address :{" "}
                <b>
                  {showInput ? (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={userData.address} // Set initial value from user data
                        onChange={(e) =>
                          setUserData({ ...userData, address: e.target.value })
                        }
                        className="block mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      />
                    </div>
                  ) : (
                    userData?.address
                  )}
                </b>
              </h2>
              <hr />

              <h2 className="m-2">
                {" "}
                qualification : <b>{userData?.qualification}</b>
              </h2>
              <hr />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProfileTable;
