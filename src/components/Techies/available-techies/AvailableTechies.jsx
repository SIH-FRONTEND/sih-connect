// importing hooks
import useFetch from "../../../hooks/useFetch";

//importing components
import LoadingSpinner from "../../UI/LoadingSpinner";
import TechiesCard from "../TechiesCard";

//url for data transfer
const url = "https://starthubconnect.adaptable.app/user/latest-members";

const AvailableTechies = () => {
  //fetching data using imported Hook
  const { data, isPending, error } = useFetch(url);

  return (
    <section className="bg-[#f6f8fe]  justify-center text-center items-center py-[3rem]">
      <h2 className=" flex  justify-center text-center items-center font-[500] text-[40px] font-[Raleway]">
        Avialable techies
      </h2>
      {data && !isPending && !error && (
        <div className="flex flex-wrap justify-center items-center py-5  gap-y-8 gap-x-0">
          {data.items.slice(0, 12).map((item) => {
            return <TechiesCard key={item.id} {...item} />;
          })}
        </div>
      )}
      {isPending && !error && !data && <LoadingSpinner />}
      {error && !isPending && !data && <h1>Error Loading Data</h1>}

      {data && (
        <button className="text-[#687eb6]  border-2 border-[#687eb6] px-8 py-1 rounded w-[248px] h-[49px] hover:bg-[#687eb6] hover:border-white hover:text-white">
          See more
        </button>
      )}
    </section>
  );
};

export default AvailableTechies;
