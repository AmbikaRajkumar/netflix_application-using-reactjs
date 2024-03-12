import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import request from "../api/request";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};
export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);

  const search = () => {
    axios.get(`${request.search}&query=${query}`).then((response) => {
      setResults(response.data.results);
      setFlag(true);
      setLoading(false);
    });
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        results,
        flag,
        loading,
        search,
        setQuery,
        setResults,
        setFlag,
        setLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
