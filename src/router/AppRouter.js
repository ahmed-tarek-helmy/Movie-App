import { Route, Routes } from "react-router-dom";

import ContactUs from "../components/contactUs/ContactUs";
import AboutUs from "../components/aboutUs/AboutUs";
import NotFound from "../components/notFound/NotFound";
import NavLayout from "../components/layout/NavLayout";
import Movies from "../components/movies/Movies"
import MovieDetail from "../components/movieDetail/MovieDetail";
import Signup from "../components/Signup/Signup";
import FavouriteMovies from "../components/favourite/FavouriteMovies";
const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavLayout />}>

      <Route path="/" element={<Movies></Movies>} />
      
        <Route path="/movie" element={<Movies></Movies>} />
        <Route path="/movie-details/:id" element={<MovieDetail />} />
        <Route path="/movie-favourite"element={<FavouriteMovies></FavouriteMovies>}></Route>
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signUp" element={<Signup/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
