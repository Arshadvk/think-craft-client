import React from "react";
import adminAxios from "../../../axios/adminAxios";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddDomain() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Domain name is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
        console.log(values);
      adminAxios
        .post("/add-domain", values)
        .then((res) => {
          console.log("add domain successfully");
          resetForm();
        })
        .catch((error) => {
          console.error("error adding domain", error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });
  
  return (
    <div className="flex items-center justify-center mt-24 w-full">
        <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-xl max-w-3xl p-5 w-full justify-center m-5">
          <div className="px-16 items-center">
            <h1 className="font-extrabold text-3xl text-shadow text-center">
              ADD DOMAIN
            </h1>
            <form className="flex flex-col gap-1" onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-7 p-2 rounded-lg border w-full ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Please enter Domain name"
                  name="name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm font-semibold pt-1">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="mt-2 p-2 font-bold text-slate-100 rounded-xl border  hover:bg-[#fc7600] bg-[#ff7700] focus:outline-none focus:ring focus:ring-[#F4B680] hover:drop-shadow-xl"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Adding..." : "ADD DOMAIN"}
              </button>
            </form>
          </div>
        </div>
   
        </div>
  );
}

export default AddDomain;
