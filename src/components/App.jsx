import { SharedLayout } from "./SharedLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Moovies } from "pages/Movies";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Moovies />} />
      </Route>
    </Routes>
  );
};
