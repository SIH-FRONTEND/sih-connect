//importing from react
import { Fragment } from "react";

//importing supportin components
import AllTechies from "../components/techies/all-techies/AllTechies";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ErrorMessage from "../components/UI/ErrorMessage";

//importing custom
import useFetch from "../hooks/useFetch";

const Techies = (props) => {
  const { data, isPending, error } = useFetch(
    "https://starthubconnect.adaptable.app/user/top-members"
  );
  return (
    <Fragment>
      {isPending && !data && <LoadingSpinner />}
      {!isPending && !error && data && <AllTechies techies={data.items} />}
      {!isPending && !data && error && <ErrorMessage />}
    </Fragment>
  );
};

export default Techies;
