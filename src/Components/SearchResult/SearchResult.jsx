import { useSearch } from "../../context/SearchContext";
import "./SearchResult.css";
//import { useEffect } from "react";
function SearchResult() {
  const base_url = "https://image.tmdb.org/t/p/original";
  const { results, flag, loading } = useSearch();

  //console.log(result, flag);
  return (
    <div className="search-result">
      {loading && <p>loading...</p>}

      {flag &&
        results.map((movie) => {
          return (
            <div key={movie.id} className="movie-card">
              <img
                src={`${base_url}${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </div>
          );
        })}

      {/* {flag &&
        result.map((movie) => {
          return (
            <div key={movie.id} className="movie-card">
              <img
                className="movie-poster"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
              <div>{movie.name}</div>
            </div>
          );
        })} */}
    </div>
  );
}
export default SearchResult;
