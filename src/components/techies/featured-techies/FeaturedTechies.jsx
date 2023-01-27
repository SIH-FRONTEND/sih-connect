//importing default
import useFetch from "../../../hooks/useFetch";

//import react-redux
import { useSelector } from "react-redux";

//importing supporting components
import LoadingSpinner from "../../UI/LoadingSpinner";
import DisplayPhoto from "../DisplayPhoto";
import ErrorMessage from "../../UI/ErrorMessage";

const url = "https://starthubconnect.adaptable.app/user/top-members";

const FeaturedTechies = () => {
  //consuming custom hook
  const { data, isPending, error } = useFetch(url);

  const { screenSize } = useSelector((state) => state.screenSize);

  return (
    <div className="bg-[rgb(16,50,140)] text-center py-[3rem] h-full]">
      <h1 className="text-white text-[4vmin] font-[400] mb-[1rem]">
        Featured techies
      </h1>
      {!data && !isPending && error && <ErrorMessage />}
      {isPending && !error && !data && <LoadingSpinner color={"#ffffff"} />}
      {data && !isPending && !error && (
        <div className="grid grid-cols-2 lg2:grid-cols-3 xl2:grid-cols-6">
          {data.items
            .slice(0, screenSize < 500 ? 6 : data.items.length)
            .map((techie) => (
              <div
                className=" m-[.7em] flex flex-col items-center justify-center "
                key={techie.id}
              >
                <DisplayPhoto
                  img={techie.profile_image}
                  alt={"Display Photo"}
                  id={techie.id}
                />
                <h1 className="text-white font-[500] phone:text-[2vmin]  lg2:text-[2.5vmin]">
                  {techie.firstname + " " + techie.lastname}
                </h1>
                <p className="text-[#6474A2] phone:text-[1.8vmin] lg2:text-[2.2vmin]">
                  {techie.skill ? techie.skill : "No skill "}
                </p>
              </div>
            ))}
        </div>
      )}
      {screenSize < 500 && data && !isPending && <button>View more</button>}
    </div>
  );
};

export default FeaturedTechies;
