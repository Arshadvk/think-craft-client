import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import adminAxios from '../../../axios/adminAxios';

function CreateTask() {
  const [domain , setDomain ] = useState([])
  useEffect(() => {
    adminAxios
      .get('/all-domain')
      .then((res) => {
        console.log(res);
        setDomain(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      weekNo: '',
      personalDevelopmentWorkout: [],
      technicalWorkouts: [],
      miscellaneousWorkouts: [],
      domain: "",
    },
    validationSchema: Yup.object({
      domain: Yup.string().required("Please select a domain"),
      personalDevelopmentWorkout: Yup.array()
      .required("Personal development workouts are required")
      .min(1, "At least one personal development workout is required"),
  
    technicalWorkouts: Yup.array()
      .required("Technical workouts are required")
      .min(1, "At least one technical workout is required"),
  
    miscellaneousWorkouts: Yup.array()
      .required("Miscellaneous workouts are required")
      .min(1, "At least one miscellaneous workout is required"),
      
      weekNo: Yup.number().required("Week number is required").min(1).max(30),
    }),
    onSubmit: (values , { setSubmitting, resetForm }) => {
      console.log(values);
        adminAxios.post('/add-task' , values).then((response)=>{
            console.log("Task added successfully");
            resetForm()
        }).catch((error)=>{
            console.error("Error adding task" , error);
        }).finally(()=>{
            setSubmitting(false)
        })

    },
  });

  const handleAddItem = (fieldName) => {
    formik.setFieldValue(fieldName, [...formik.values[fieldName], ""]);
  };

  const handleRemoveItem = (fieldName, index) => {
    const newItems = [...formik.values[fieldName]];
    newItems.splice(index, 1);
    formik.setFieldValue(fieldName, newItems);
  };

  const renderErrorMessage = (fieldName) => {
    return formik.touched[fieldName] && formik.errors[fieldName] ? (
      <div className="text-red-500 text-sm font-semibold pt-1">
        {formik.errors[fieldName]}
      </div>
    ) : null;
  };

  return (
    <div className="lg:ml-64 mt-10">
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-xl max-w-3xl p-5">
        <div className="px-16">
          <h1 className="font-extrabold text-3xl text-shadow text-center">
            Create Task
          </h1>
          <form className="flex flex-col gap-1" onSubmit={formik.handleSubmit}>
            <div className="relative">
              <label htmlFor="weekNo" className="mt-5 font-semibold text-sm">
                Week Number
              </label>
              <input
                type="number"
                className="p-2 rounded-xl border w-full"
                name="weekNo"
                value={formik.values.weekNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter week number"
              />
              {renderErrorMessage("weekNo")}
            </div>

            <div className="relative">
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
                {renderErrorMessage("selectedDomain")}
              </div>

            {["personalDevelopmentWorkout", "technicalWorkouts", "miscellaneousWorkouts"].map((fieldName) => (
              <div key={fieldName}>
                <label htmlFor={fieldName} className="mt-5 font-semibold text-sm">
                  {fieldName}
                </label>
                {formik.values[fieldName].map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      name={`${fieldName}.${index}`}
                      value={item}
                      className="p-2 rounded-xl border w-full"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder={`Enter ${fieldName} ${index + 1}`}
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                      onClick={() => handleRemoveItem(fieldName, index)}
                    >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  

                  <button
                    type="button"
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleAddItem(fieldName)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                  </button>
                  {renderErrorMessage(fieldName)}
                  {formik.touched[fieldName] && formik.errors[fieldName] ? (
                    <div className="text-red-500 text-sm font-semibold pt-1 py-1">
                      {formik.errors[fieldName]}
                    </div>
                  ) : null}
                </div>
              ))}

              <button type="submit" className="py-2 font-bold text-slate-100 rounded-xl border bg-[#f18b31] hover:bg-[#fc7600] bg-[#ff7700] focus:outline-none focus:ring focus:ring-[#F4B680] hover:drop-shadow-xl">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateTask;
