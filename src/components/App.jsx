import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));

export const App = () => {
  return (
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

      </Routes>
  );
};
