const fetchData = () => {
  console.log('process.env.NEXT_PUBLIC_SITE_URL', process.env.NEXT_PUBLIC_SITE_URL)
  return fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/crypto`, {
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