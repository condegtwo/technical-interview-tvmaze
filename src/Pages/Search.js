import { useState } from "react";
import { useRecoilValue } from "recoil";
import ShowCard from "../Components/ShowCard";
import Spinner from "../Components/Spinner";
import { firstSearchSelector } from "../Context/Selectors/Search";
import useSearch from "../Hooks/useSearch";
import "../Styles/Search.scss";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const firstSearch = useRecoilValue(firstSearchSelector);
  const { search, results, loading } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    search(keyword);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {!firstSearch && (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {!!results.length ? (
                <div className="results">
                  <h1 className="title">Results</h1>
                  <div className="container">
                    {results.map(({ id, image, rating, name, genres }) => (
                      <ShowCard
                        id={id}
                        key={id}
                        img={image?.medium}
                        rating={rating.average}
                        name={name}
                        genres={genres}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <span className="noresults">(No results)</span>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
