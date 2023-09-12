import React, { useState } from "react";

function MultipleInputFields({ inputValues, setInputValues }) {
  const [errors, setErrors] = useState([""]);

  // Function to handle input changes
  const handleInputChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);

    const updatedErrors = [...errors];
    updatedErrors[index] = value.trim() === "" ? "This field is required" : "";
    setErrors(updatedErrors);
  };

  // Function to add a new input field
  const addInputField = () => {
    setInputValues([...inputValues, ""]);
    setErrors([...errors, ""]);
  };

  // Function to remove an input field (optional)
  const removeInputField = (index) => {
    const updatedValues = [...inputValues];
    updatedValues.splice(index, 1);
    setInputValues(updatedValues);

    const updatedErrors = [...errors];
    updatedErrors.splice(index, 1);
    setErrors(updatedErrors);
  };

  return (
    <div className="flex justify-between w-full ">
      <div>
        {inputValues.map((value, index) => (
          <div key={index}>
            {index + 1 + ")"}
            <input
              type="text"
              className="m-1"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            {errors[index] && (
              <span style={{ color: "red" }}>{errors[index]}</span>
            )}
            <button onClick={() => removeInputField(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-eraser-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="items-end ml-6">
        <button onClick={addInputField}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="green"
            class="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MultipleInputFields;
