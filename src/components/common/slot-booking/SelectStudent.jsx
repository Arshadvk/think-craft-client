import React from 'react'

function SelectStudent({selectedStudent , student , handleStudentSelectChange}) {
  return (
    <div className="mt-2">
        <label
          htmlFor="reviewerSelect"
          className="text-white text-sm font-semibold"
        >
          select student:
        </label>
        <select
          id="reviewerSelect"
          name="reviewerSelect"
          className="block w-full text-white bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 mt-1"
          value={selectedStudent}
          onChange={handleStudentSelectChange}
        >
          <option value="">Select a student</option>
          {student.map((obj) => (
            <option key={obj._id} value={obj?.student?._id}>
              {obj?.student?.name}
            </option>
          ))}
        </select>
      </div>
  )
}

export default SelectStudent
