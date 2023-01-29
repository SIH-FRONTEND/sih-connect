// importing hooks
import useFetch from "../../../hooks/useFetch";

//importing from react-redux
import { useSelector } from "react-redux";

//importing components
import LoadingSpinner from "../../UI/LoadingSpinner";
import TechiesCard from "../TechiesCard";
import Button from "../../UI/Button";
import ErrorMessage from "../../UI/ErrorMessage";
import HeadingText from "../../UI/HeadingText";

//url for data transfer
const url = "https://starthubconnect.adaptable.app/user/latest-members";

const AvailableTechies = () => {
  const { screenSize } = useSelector((state) => state.screenSize);

  //fetching data using imported Hook
  const { data, isPending, error } = useFetch(url);

  if (data) console.log(data);

  return (
    <div className="bg-[#f6f8fe] text-center py-[1rem] h-full flex flex-col items-center">
      <HeadingText color={"#10328c"}>Available techies</HeadingText>
      {data && !isPending && !error && (
        <div className="flex flex-wrap justify-center items-center gap-[1.2em]">
          {data.items.slice(0, screenSize < 500 ? 6 : 10).map((item) => {
            return <TechiesCard key={item.id} {...item} />;
          })}
        </div>
      )}
      {isPending && !error && !data && <LoadingSpinner />}
      {error && !isPending && !data && <ErrorMessage bg={"#10328c"} />}

      {data && <Button border={"2px solid #687eb6"}>See more</Button>}
    </div>
  );
};

export default AvailableTechies;
