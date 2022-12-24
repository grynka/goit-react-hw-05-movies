import { SharedLayout } from "./SharedLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { useState, useEffect } from "react";
import { loadMovies } from "service/API";

  
export const App = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

useEffect(() => {
  const fetchData = async () => {
  const res = await loadMovies();
  setMovies(res)
    };

  fetchData()
}, [])
    

  const onSubmit = event => {
    event.preventDefault();
    const input = event.target.elements.search;
    const value = input.value.trim();

    if (value === '') {
      alert.error(`You didn't enter anything!`);
      return;
    }

    setSearchMovie(value);
    setPage(1);
    console.log(searchMovie, page)
  }


  return (
    
    <div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home movies={movies}  />} />
        <Route path="movies" element={<Movies onSubmit={onSubmit}/>} />
      </Route>
    </Routes></div>
  );
};
