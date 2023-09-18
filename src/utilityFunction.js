async function fetchData(query) {
  const token = "538bb39a365333464262e3a6802550";

  let data = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: query, //sql query to get the desired data
    }),
  });

  let response = await data.json();
  return response.data;
}

export default fetchData;
