import { useEffect, useState } from "react";

export default function useFetchMunros() {
  const BASE_URL = "https://munroapi.herokuapp.com";
  const [munros, setMunros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/munros`);
      const data = await response.json();
      setMunros(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { munros, loading, error };
}
