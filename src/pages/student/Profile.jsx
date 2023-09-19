import React from "react";
import Navbar from "../../components/common/nav/Navbar";
import ProfileTable from "../../components/common/profile/Profile";

function Profile() {
  return (
    <div>
      <Navbar type={""} />

      <ProfileTable type={"student"} />
    </div>
  );
}

export default Profile;
