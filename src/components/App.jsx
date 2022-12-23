import { SharedLayout } from "./SharedLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";


export const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes></div>
  );
};
