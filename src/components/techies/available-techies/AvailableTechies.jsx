// importing hooks
import useFetch from "../../../hooks/useFetch";

//importing components
import LoadingSpinner from "../../UI/LoadingSpinner";
import TechiesCard from "../TechiesCard";
import Button from "../../UI/Button";
import ErrorMessage from "../../UI/ErrorMessage";

//url for data transfer
const url = "https://starthubconnect.adaptable.app/user/latest-members";

const AvailableTechies = () => {
  //fetching data using imported Hook
  const { data, isPending, error } = useFetch(url);

  if (data) console.log(data);

  return (
    <div className="bg-[#f6f8fe] text-center py-[3rem] h-full] flex flex-col items-center">
      <h2 className=" text-[4vmin] font-[400] mb-[1rem] text-[#10328c]">
        Available techies
      </h2>
      {data && !isPending && !error && (
        <div className="flex flex-wrap justify-center items-center py-5  gap-[18px]">
          {data.items.slice(0, 10).map((item) => {
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
