import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function AddSlot() {

    const validate = (values) => {
        const errors = {};

        if (!values.date) {
            errors.date = 'Date is required';
        }

        if (!values.timeStart) {
            errors.timeStart = 'Starting time is required';
        }

        if (!values.timeEnd) {
            errors.timeEnd = 'Ending time is required';
        }

        return errors;
    };


    const handleSubmit = (values) => {
        console.log('Submitted values:', values);
        // You can perform additional actions with the submitted values here
    };
    return (
        <div class="sm:64">
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-xl max-w-3xl p-5">
                    <div className="px-16">
                        <h1 className="font-extrabold text-3xl text-shadow text-center">
                            ADD SLOT
                        </h1>
                        <Formik initialValues={{ date: '', timeStart: '', timeEnd: '' }} onSubmit={handleSubmit} validate={validate}>
                            <Form className="flex flex-col gap-1">
                                <label htmlFor="date" className="mt-4 text-sm font-semibold from-stone-500">Date</label>
                                <Field type="date" name="date" className="p-2  ps-14 rounded-lg border w-full" />
                                <ErrorMessage name="date" component="div" className="text-red-500 font-semibold text-sm" />

                                <label htmlFor="timeStart" className="mt-1 text-sm font-semibold from-stone-500">Starting Time</label>
                                <Field type="time" name="timeStart" className="p-2 ps-14 rounded-lg border w-full" />
                                <ErrorMessage name="timeStart" component="div" className="text-red-500 font-semibold text-sm" />

                                <label htmlFor="timeEnd" className="mt-1 text-sm font-semibold from-stone-500">Ending Time</label>
                                <Field type="time" name="timeEnd" className="p-2  ps-14 rounded-lg border w-full" />
                                <ErrorMessage name="timeEnd" component="div" className="text-red-500 font-semibold text-sm" />

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
            </section>
        </div>
    );
}

export default AddSlot;
