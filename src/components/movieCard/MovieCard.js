import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovieFromFav,
  removeMovieFromFav,
} from "../../store/slices/FavouriteSlice";

const MovieCard =({movie})=>{
  const favouriteList = useSelector((state) => state.favourite.favouriteMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetails = (movie) => {
    console.log(movie);
    navigate(
      `/movie-details/${movie.id}`
    );
  };

return(
    <>
      <div
      className="card col-12 col-md-6 col-lg-2 m-1 p-0 mt-5 text-bg-dark"
      style={{ width: "25rem", height: "25rem" }}
    >
      <img
        className="card-img-top w-100"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="Cardimagecap"
      />

      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text small text-white">{movie.overview}</p>
        <div className="d-flex justify-content-between ">
        <button
          className="btn btn-danger"
          onClick={() => {
            goToDetails(movie);
          }}
        >
          Go To details
        </button>
        <i
            onClick={() => {
              favouriteList.includes(movie)
                ? dispatch(removeMovieFromFav(movie))
                : dispatch(addMovieFromFav(movie));
            }}
            className={`${
              favouriteList.includes(movie) ? `fas` : `far`
            } fa-star fa-2x d-inline-block text-danger  `}
          ></i>


        </div>
        
      </div>
    </div>
    </>
)
}
export default MovieCard;