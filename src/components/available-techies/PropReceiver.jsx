import React, { useEffect, useState } from "react";
import UserProp from "./UserProp";
import data from "./Data";
const url = "https://starthubconnect.adaptable.app/user/latest-members";

const PropReceiver = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState("");

  useEffect(() => {
    const getLatestMembers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(users);
      setUsers(data);
      setIsLoading(false);
    };

    try {
      getLatestMembers();
    } catch (error) {
      setError(error);
      setIsLoading(true);
      console.log(error);
    }
  }, []);

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return (
    <div>
      <section className="bg-[#f6f8fe]  justify-center text-center items-center">
        <div className="p-5">
          <h2 className=" flex  justify-center text-center items-center font-[500] text-[40px] font-[Raleway]">
            Avialable techies
          </h2>
          <div className="flex flex-wrap justify-center items-center py-5  gap-y-8 gap-x-0">
            {users.items.map((item) => {
              return <UserProp key={item.id} {...item} />;
            })}
          </div>

          <button className="text-[#687eb6]  border-2 border-[#687eb6]   px-8 py-1 rounded  hover:bg-[#687eb6] hover:border-white hover:text-white">
            See more
          </button>
        </div>
      </section>
    </div>
  );
};

export default PropReceiver;
