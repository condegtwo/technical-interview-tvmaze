import { useState } from "react";
import { useRecoilState } from "recoil";
import { firstSearch, searchResults } from "../Context/Atoms/Search";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useRecoilState(searchResults);
  const [flag, setFlag] = useRecoilState(firstSearch);

  const search = (keyword) => {
    flag && setFlag(false);
    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
      .then((r) => r.json())
      .then((json) => json.map((showAndScore) => showAndScore.show))
      .then((shows) => {
        setResults(shows);
        setLoading(false);
      })
      .catch(console.error);
  };

  return { search, results, loading };
};

export default useSearch;
