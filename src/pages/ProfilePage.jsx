import React from "react";

//importing navigation params from react-router-dom
import { useParams } from "react-router-dom";
// import Profile from "../components/Profile/Profile";
import UserProfile from "../components/profile/UserProfile";


const ProfilePage = () => {
  const { id } = useParams();
  console.log(id);

  //work here first

  //writes logic that fetches information about a single techie
  //this must be async
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
