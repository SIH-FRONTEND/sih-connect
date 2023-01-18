import { Fragment } from "react";

//importing custom hooks
import useFetch from "../hooks/useFetch";

//importing navigation params from react-router-dom
import { useParams } from "react-router-dom";
// import Profile from "../components/Profile/Profile";
import UserProfile from "../components/profile/UserProfile";
import LoadingSpinner from "./../components/UI/LoadingSpinner";

const ProfilePage = () => {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    `https://starthubconnect.adaptable.app/user/find/${id}`
  );

  return (
    <div>
      {!isPending && !data && error && <h1>User not available</h1>}
      {isPending && !data && <LoadingSpinner />}
      {data && !isPending && !error && <UserProfile user={data} />}
    </div>
  );
};

export default ProfilePage;
