import useFetch from "../hooks/useFetch";

const DeveloperProfile = () => {
  const { data, isPending, error } = useFetch(
    "https://starthubconnect.adaptable.app/user/top-members"
  );

  if (data) {
    console.log(data);
  }

  return (
    <div>
      {!isPending && !data && error && (
        <h1>Could not fetch data : {error.message}</h1>
      )}
      {isPending && !error && !data && (
        <h1 className="text-red-500">Loading...</h1>
      )}
      {data && !isPending && !error && (
        <div>
          {data.items.map((each, id) => (
            <h1 key={id}>{each.firstname}</h1>
          ))}
        </div>
      )}
      <h1>DeveloperProfile</h1>
    </div>
  );
};

export default DeveloperProfile;
