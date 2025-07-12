import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Test";
import NotFound from "./Pages/NotFound";
import MoviePage from "./Pages/MoviePage";
import FavoriteMoviePage from "./Pages/FavoriteMoviePage";

//3f788d21 OMDB api key
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorite-movies" element={<FavoriteMoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
