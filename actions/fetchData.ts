const fetchData = () => {
  console.log('process.env.NEXT_PUBLIC_SITE_URL', process.env.NEXT_PUBLIC_SITE_URL)
  return fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/crypto`, {
    // remov revalidation
    next: {
      revalidate: 0, // Disable revalidation for this request
    },
    cache: "no-store", // Disable caching for this request
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