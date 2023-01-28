//importing from react
import { useState } from "react";

//importing default hook
import useFetch from "../../../hooks/useFetch";

//import react-redux
import { useSelector } from "react-redux";

//importing supporting components
import LoadingSpinner from "../../UI/LoadingSpinner";
import DisplayPhoto from "../DisplayPhoto";
import ErrorMessage from "../../UI/ErrorMessage";
import Button from "../../UI/Button";

const url = "https://starthubconnect.adaptable.app/user/top-members";

const FeaturedTechies = () => {
  //state to show more featured techies onclick
  const [shownTechies, setShownTechies] = useState(6);

  //consuming custom hook
  const { data, isPending, error } = useFetch(url);

  const { screenSize } = useSelector((state) => state.screenSize);

  const expandTechiesHandler = (dat) => {
    if (dat) {
      setShownTechies((prev) => {
        if (prev === 6) {
          return data.items.length;
        } else {
          return 6;
        }
      });
      return;
    }
  };

  return (
    <div className="bg-[#10328c] text-center py-[3rem] h-full]">
      <h1 className="text-white text-[4vmin] font-[400] mb-[1rem]">
        Featured techies
      </h1>
      {!data && !isPending && error && <ErrorMessage />}
      {isPending && !error && !data && <LoadingSpinner color={"#ffffff"} />}
      {data && !isPending && !error && (
        <div className="grid grid-cols-2 md2:grid-cols-3 lg2:grid-cols-4 xl2:grid-cols-6">
          {data.items
            .slice(0, screenSize < 320 ? shownTechies : data.items.length)
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
      {screenSize < 320 && data && !isPending && (
        <Button
          backgroundColor="#ffffff"
          color={"#10328c"}
          margin="auto"
          clickHandler={expandTechiesHandler.bind(data)}
        >
          {shownTechies <= 6 ? "More" : "Less"}
        </Button>
      )}
    </div>
  );
};

export default FeaturedTechies;
