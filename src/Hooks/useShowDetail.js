import { useEffect, useState } from "react"

const useShowDetail = (id) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then((r) => r.json())
        .then((json) => setDetails(json))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  return { details, loading };
};

export default useShowDetail;
