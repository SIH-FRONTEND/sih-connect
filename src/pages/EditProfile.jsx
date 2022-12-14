//imported hooks
import React, { useState, Fragment } from "react";

//imported components
import EditUserProfile from "../components/EditUserProfile";
import ChangePassword from "../components/change-password/ChangePassword";

const EditProfile = () => {
  const [showEditProfile, setShowEditProfile] = useState(true);
  const [activeField, setActiveField] = useState(true);

  const onEditProfileHandler = (event) => {
    if (event.target.tagName === "P") {
      setShowEditProfile((val) => !val);
      setActiveField((val) => !val);
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
            activeField && "border-b-2"
          }  text-[14px] hover:cursor-pointer`}
        >
          Update Profile
        </p>
        <p
          className={`w-30 h-[25px] font-semibold  text-center ${
            !activeField && "border-b-2"
          }  text-[14px] hover:cursor-pointer`}
        >
          Change Password
        </p>
      </div>
      {showEditProfile && <EditUserProfile />}
      {showEditProfile || <ChangePassword />}
    </Fragment>
  );
};

export default EditProfile;
