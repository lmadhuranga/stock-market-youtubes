const fetchData = () => {
  return fetch("http://localhost:3001/api/crypto", {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .then((data) => {
      // Handle the fetched data if needed
      // console.log("Fetched trades data:", data);
      return data?.data ?? null;
    })
    .catch((error) => {
      console.error("Error fetching trades data:", error);
    });
}
export default fetchData;