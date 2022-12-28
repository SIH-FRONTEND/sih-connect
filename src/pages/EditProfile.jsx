//imported hooks
import React, { useState, Fragment } from "react";

//imported components
import EditUserProfile from "../components/profile/EditUserProfile";
import ChangePassword from "../components/auth/ChangePassword";

//Hardcoded Data
const TEXT_DATA = {
  updateProfile: "Update Profile",
  changePassword: "Change Password",
};

const EditProfile = () => {
  const [showEditProfile, setShowEditProfile] = useState(true);

  const onEditProfileHandler = (event) => {
    if (event.target.textContent === TEXT_DATA.updateProfile) {
      setShowEditProfile((val) => true);

      return;
    }
    if (event.target.textContent === TEXT_DATA.changePassword) {
      setShowEditProfile((val) => false);

      return;
    }
  };
  return (
    <Fragment>
      <div
        className="flex justify-evenly content-end text-end mx-end gap-0"
        onClick={onEditProfileHandler}
      >
        <p
          className={`w-30 h-[25px] font-semibold  text-center ${
            showEditProfile && "border-b-2"
          }  text-[14px] hover:cursor-pointer`}
        >
          Update Profile
        </p>
        <p
          className={`w-30 h-[25px] font-semibold  text-center ${
            !showEditProfile && "border-b-2"
          }  text-[14px] hover:cursor-pointer`}
        >
          Change Password
        </p>
      </div>
      {showEditProfile && <EditUserProfile />}
      {!showEditProfile && <ChangePassword />}
    </Fragment>
  );
};

export default EditProfile;
