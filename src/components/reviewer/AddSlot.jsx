import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import reviewerAxios from "../../axios/reviewerAxios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import slot from "../../assets/image/reviewerHome.jpg";
function AddSlot() {
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const validate = (values) => {
    const errors = {};

    if (!values.date) {
      errors.date = "Date is required";
    }

    if (!values.timeStart) {
      errors.timeStart = "Starting time is required";
    }

    if (!values.timeEnd) {
      errors.timeEnd = "Ending time is required";
    }

    if (!values.reviewTime) {
      errors.reviewTime = "Review time is required";
    }

    if (values.timeStart >= values.timeEnd) {
      errors.timeEnd = "Ending time must be greater than starting time";
    }

    const currentTime = getCurrentTime();
    const currentDate = getCurrentDate();
    if (values.timeStart <= currentTime && values.date === currentDate) {
      errors.timeStart = "Starting time must be greater than current time";
    }

    const startTime = new Date(`2000-01-01T${values.timeStart}`);
    const endTime = new Date(`2000-01-01T${values.timeEnd}`);
    const timeDifference = (endTime - startTime) / (60 * 1000); // Difference in minutes

    if (timeDifference <= values.reviewTime) {
      errors.reviewTime =
        "Review time must be less than the time difference between start and end times";
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted values:", values);
    reviewerAxios
      .post("/add-slot", { values })
      .then(() => {
        console.log("added");
        resetForm(); // Clear the form
        toast.success("Slot added successfully");
      })
      .catch(() => {
        toast.error("An error occurred");
        console.log("error");
      });
  };

  return (
    <div className="sm:64 lg:ml-60 mt-4">
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-xl max-w-3xl p-5">
          <div className="flex">
            <div className="lg:w-1/2 p-4 mt-8 sm:block hidden">
              <img
                src={slot}
                className="shadow-sm rounded-lg"
                alt=""
                srcset=""
              />
            </div>
            <div className="lg:w-1/3 lg:pl-6">
              <h1 className="font-extrabold text-3xl text-shadow text-center">
                ADD SLOT
              </h1>
              <Formik
                initialValues={{
                  date: "",
                  timeStart: "",
                  timeEnd: "",
                  reviewTime: "",
                }}
                onSubmit={handleSubmit}
                validate={validate}
              >
                <Form className="flex flex-col gap-1">
                  <label
                    htmlFor="date"
                    className="mt-4 text-sm font-semibold from-stone-500"
                  >
                    Date
                  </label>
                  <Field
                    type="date"
                    name="date"
                    className="p-2 ps-14 rounded-lg border w-full"
                    min={getCurrentDate()}
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 font-semibold text-sm"
                  />

                  <label
                    htmlFor="reviewTime"
                    className="mt-1 text-sm font-semibold from-stone-500"
                  >
                    Review Time (in minutes)
                  </label>
                  <Field
                    type="number"
                    name="reviewTime"
                    className="p-2 ps-14 rounded-lg border w-full"
                  />
                  <ErrorMessage
                    name="reviewTime"
                    component="div"
                    className="text-red-500 font-semibold text-sm"
                  />

                  <label
                    htmlFor="timeStart"
                    className="mt-1 text-sm font-semibold from-stone-500"
                  >
                    Starting Time
                  </label>
                  <Field
                    type="time"
                    name="timeStart"
                    className="p-2 ps-14 rounded-lg border w-full"
                  />
                  <ErrorMessage
                    name="timeStart"
                    component="div"
                    className="text-red-500 font-semibold text-sm"
                  />

                  <label
                    htmlFor="timeEnd"
                    className="mt-1 text-sm font-semibold from-stone-500"
                  >
                    Ending Time
                  </label>
                  <Field
                    type="time"
                    name="timeEnd"
                    className="p-2 ps-14 rounded-lg border w-full"
                  />
                  <ErrorMessage
                    name="timeEnd"
                    component="div"
                    className="text-red-500 font-semibold text-sm"
                  />

                  <button
                    type="submit"
                    className="py-2 mt-4 font-bold text-slate-100 rounded-xl border bg-[#f18b31] hover:bg-[#fc7600] bg-[#ff7700] focus:outline-none focus:ring focus:ring-[#F4B680] hover:drop-shadow-xl"
                  >
                    ADD SLOT
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddSlot;
