//imported hooks
import React, { useState, Fragment } from "react";

//importing from react-redux
import { useSelector } from "react-redux";

//imported components
import EditUserProfile from "../components/profile/edit/EditUserProfile";
import ChangePassword from "../components/profile/edit/ChangePassword";

//Hardcoded Data
const TEXT_DATA = {
  updateProfile: "Update Profile",
  changePassword: "Change Password",
};

const EditProfile = () => {
  //recalling stored details from fetched user
  const userDetails = useSelector((state) => state.fetchedUser.fetchedDetails);

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
        className="flex justify-evenly content-end text-end mx-end gap-0 flex-col xl2:flex-row"
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
      {showEditProfile && <EditUserProfile user={userDetails} />}
      {!showEditProfile && <ChangePassword />}
    </Fragment>
  );
};

export default EditProfile;
