import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import studentAxios from "../../../axios/studentAxios";
import { useNavigate, useParams } from "react-router-dom";
import advisorAxios from "../../../axios/advisorAxios";
import reviewerAxios from "../../../axios/reviewerAxios";

function SetProfile({ type }) {
  const [domain, setDomain] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = type;
  useEffect(() => {
    studentAxios
      .get("/get-domaim-info")
      .then((response) => {
        setDomain(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const formik = useFormik({
    initialValues: {
      number: "",
      gender: "",
      qualification: "",
      address: "",
      dob: "",
      age: "",
      domain:""
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .min(10, "Must be at least 10 numbers")
        .max(10, "Must be at less than 10 numbers")
        .required("Mobile number is required"),
      gender: Yup.string().required("Gender is required"),
      qualification: Yup.string().required(
        "Educational qualification is required"
      ),
      address: Yup.string().required("Address is required"),
      dob: Yup.date().required("Date of Birth is required"),
      age: Yup.number().required("Age is required"),
      
    }),
    onSubmit: (values) => {
      if (user === "student") {
        studentAxios
          .put(`/edit-profile/${id}`, { values })
          .then((res) => {
            const result = res.data;
            console.log(result);
            navigate(`/login`);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else if (user === "advisor") {
        advisorAxios
          .put(`/edit-profile/${id}`, { values })
          .then((res) => {
            const result = res.data;
            console.log(result);
            navigate(`/advisor/login`);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else if (user === "reviewer") {
        reviewerAxios
          .put(`/edit-profile/${id}`, { values })
          .then((res) => {
            const result = res.data;
            console.log(result);
            navigate(`/reviewer/login`);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }

      console.log(values);
    },
  });

  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-6">
          <div className="sm: px-16 ">
            <h1 className="font-extrabold text-3xl text-shadow text-center">
              BROCAMP <span className="text-xs">{user.toUpperCase()}</span>
            </h1>
            <br />
            <h1 className="font-bold text-xl text-center text-shadow ">
              Profile
            </h1>
            <form
              className="flex flex-col gap-1"
              onSubmit={formik.handleSubmit}
            >
              <div className="relative">
                <label htmlFor="number" className="mt-5 font-semibold text-sm">
                  Mobile{" "}
                </label>
                <input
                  type="text"
                  className="p-2  rounded-xl border w-full"
                  name="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="enter your mobile number"
                />
                {formik.touched.number && formik.errors.number ? (
                  <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                    {formik.errors.number}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <label htmlFor="dob" className="font-semibold text-sm">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="p-2 rounded-xl border w-full"
                  name="dob"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                    {formik.errors.dob}
                  </div>
                ) : null}
              </div>

              <div className={ user === "advisor" ? "hidden relative" : "relative"}>
                <label htmlFor="domain" className="mt-5 font-semibold text-sm">
                  Select Domain
                </label>
                <select
                  name="domain"
                  value={formik.values.domain}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`p-2 rounded-xl border w-full ${
                    formik.touched.domain && formik.errors.domain
                      ? "border-red-500"
                      : ""
                  }`}
                >
                  <option value="">Select a domain</option>
                  {domain.map((d) => (
                    <option key={d.id} value={d._id}>
                      {d.name}
                    </option>
                  ))}
                </select>
                {formik.touched.domain && formik.errors.domain ? (
                  <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                    {formik.errors.domain}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <label htmlFor="dob" className="font-semibold text-sm">
                  Age
                </label>
                <input
                  type="number"
                  className="p-2 rounded-xl border w-full"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.age && formik.errors.age ? (
                  <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                    {formik.errors.age}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <label htmlFor="gender" className="font-semibold text-sm">
                  Gender
                </label>
                <select
                  className="p-2 rounded-xl border w-full"
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" label="Select gender" />
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                </select>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                    {formik.errors.gender}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <label
                  htmlFor="qualification"
                  className="font-semibold text-sm"
                >
                  Educational Qualification
                </label>

                <input
                  type="text"
                  className="p-2 rounded-xl border w-full"
                  name="qualification"
                  value={formik.values.qualification}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your educational qualification"
                />
                {formik.touched.qualification && formik.errors.qualification ? (
                  <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                    {formik.errors.qualification}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <label htmlFor="address" className="font-semibold text-sm">
                  Address
                </label>
                <input
                  type="text"
                  className="p-2 rounded-xl border w-full"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your address"
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                    {formik.errors.address}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="py-2 mt-3 rounded-xl border bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:drop-shadow-xl"
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

export default SetProfile;
