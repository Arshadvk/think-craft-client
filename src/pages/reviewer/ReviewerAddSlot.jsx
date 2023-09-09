import React from "react";
import Navbar from "../../components/common/nav/Navbar";
import AddSlot from "../../components/reviewer/AddSlot";

function ReviewerAddSlot() {
  return (
    <div>
      <Navbar type={"reviewer"} />

      <AddSlot />
    </div>
  );
}

export default ReviewerAddSlot;
