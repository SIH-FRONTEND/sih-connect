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
import HeadingText from "../../UI/HeadingText";

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
    <div className="bg-[#10328c] text-center py-[2rem] h-full]">
      <HeadingText color="#ffffff">Featured techies</HeadingText>
      {!data && !isPending && error && <ErrorMessage />}
      {isPending && !error && !data && <LoadingSpinner color={"#ffffff"} />}
      {data && !isPending && !error && (
        <div className="flex flex-wrap px-[1em] xl2:px-[6em] mb-[1.5em] gap-[.5em] xl2:gap-[2em] items-center justify-around">
          {data.items
            .slice(0, screenSize <= 500 ? shownTechies : data.items.length)
            .map((techie) => (
              <div
                className=" flex flex-col items-center justify-center xl2:w-[10em] w-[7em] h-[10em] xl2:h-[15em]"
                key={techie.id}
              >
                <DisplayPhoto
                  img={techie.profile_image}
                  alt={"Display Photo"}
                  id={techie.id}
                  rWidth={"6em"}
                />
                <h1 className="text-white font-[700] text-[1em] lg2:text-[1.2em]">
                  {techie.firstname + " " + techie.lastname}
                </h1>
                <p className="text-[#ced4e4] text-[1em] lg2:text-[1em]">
                  {techie.skill ? techie.skill : "No skill "}
                </p>
              </div>
            ))}
        </div>
      )}
      {screenSize <= 500 && data && !isPending && (
        <Button
          backgroundColor="#ffffff"
          color={"#10328c"}
          margin="auto"
          clickHandler={expandTechiesHandler.bind(data)}
          hoverColor="#ffffff"
        >
          {shownTechies <= 6 ? "More" : "Less"}
        </Button>
      )}
    </div>
  );
};

export default FeaturedTechies;
