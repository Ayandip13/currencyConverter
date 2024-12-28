import { useEffect, useState } from "react";

// Custom hook to fetch currency information
function useCurrencyInfo(currency) {
  // State to store the fetched currency data
  const [data, setData] = useState({});

  // useEffect runs when the component mounts or when the 'currency' dependency changes
  useEffect(() => {
    // Fetch currency data from the given API endpoint
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Convert the response to JSON
      .then((res) => setData(res[currency])); // Update the state with the specific currency data
  }, [currency]); // Dependency array ensures the effect runs when 'currency' changes

  // Return the fetched currency data so it can be used by the component
  return data;
}

export default useCurrencyInfo;
