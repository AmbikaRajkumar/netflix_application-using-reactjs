import "./Search.css";
import { useSearch } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

function Search() {
  const { search, flag, query, setQuery, setFlag, setResults } = useSearch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    console.log(query);
    if (query) {
      setFlag(true);
      search();
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };

  const cancelSearch = () => {
    setFlag(false);
    setQuery("");

    setResults([]);
    navigate("/");
  };

  return (
    <div className="search-form">
      <input
        className="search-input"
        type="text"
        value={query}
        placeholder="Search for movies"
        onChange={handleChange}
      />
      {flag && (
        <button type="button" className="cancel-button" onClick={cancelSearch}>
          x
        </button>
      )}
      {!flag && (
        <button type="button" className="search-button" onClick={handleSubmit}>
          Search
        </button>
      )}
    </div>
  );
}
export default Search;
