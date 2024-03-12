//import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchProvider } from "./context/SearchContext";

//import requests from "./api/request";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFount from "./pages/notfount";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search/:query" element={<Search />} />
          <Route component={<NotFount />} />
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;

// let movies=[
//      {title:"NetFlix Original", name:"x"},
//      {title:"Movies", name:"y"},
//      {title:"TvShowas", name:"z"}
// ]
//   {/* <Row /> */}

//   {/* { movies.map(function(item){
//   return(
//     <Row title={item.title} name={item.name}/>)

//  })} */}

//   {/* <Row title="Trending" isLargeRow fetchUrl={requests.fetchTrending} />
//         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
//         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
//         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//         <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />     */}
