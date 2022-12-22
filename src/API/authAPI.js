export const loginHandler = async (url, userDetails) => {
  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!data.ok) {
    throw new Error("login not successful");
  }
  const response = await data.json();
  return response;
};
