import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import adminAxios from '../../../axios/adminAxios';


function CreateUser() {
  console.log(localStorage.getItem("Admin"));
  const [role, setRole] = useState('student');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    adminAxios
      .post(`/add-${role}`, values)
      .then((response) => {
        // Handle success, for example, show a success message or redirect
        console.log('User added successfully.');
        resetForm();
      })
      .catch((error) => {
        // Handle errors, for example, display error messages
        console.error('Error adding user:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div class="lg:ml-64 mt-10">
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-xl max-w-3xl p-5">
          <div className="px-16">
            <h1 className="font-extrabold text-3xl text-shadow text-center">
              ADD USER
            </h1>
            <Formik
              initialValues={{ name: '', email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  <Field
                    type="text"
                    name="name"
                    className="p-2 mt-7 rounded-lg border w-full"
                    placeholder="Please enter your name"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 font-bold text-sm" />

                  <Field
                    type="email"
                    name="email"
                    className="p-2 rounded-lg border w-full"
                    placeholder="Please enter your email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 font-bold text-sm" />

                  <select
                    name="role"
                    value={role}
                    onChange={handleRoleChange}
                    className="p-2 rounded-lg border w-full"
                  >
                    <option value="student">Student</option>
                    <option value="advisor">Advisor</option>
                    <option value="reviewer">Reviewer</option>
                  </select>

                  <button
                    type="submit"
                    className="py-2 font-bold text-slate-100 rounded-xl border bg-[#f18b31] hover:bg-[#fc7600] bg-[#ff7700] focus:outline-none focus:ring focus:ring-[#F4B680] hover:drop-shadow-xl"
                    disabled={isSubmitting}
                  >
                    ADD USER
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default CreateUser;
