import React from 'react'

function SelectReviewer({selectedReviewer , handleReviewerSelectChange , reviewers }) {
  return (
    <div className="mt-2">
    <label
      htmlFor="reviewerSelect"
      className="text-white text-sm font-semibold"
    >
      select reviewer:
    </label>
    <select
      id="reviewerSelect"
      name="reviewerSelect"
      className="block w-full text-white bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 mt-1"
      value={selectedReviewer}
      onChange={handleReviewerSelectChange}
    >
      <option value="">Select a reviewer</option>
      {reviewers.map((reviewer) => (
        <option key={reviewer._id} value={reviewer._id}>
          {reviewer.name}
        </option>
      ))}
    </select>
  </div>
  )
}

export default SelectReviewer
