import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";
const FavouriteMovies =()=>{
  const favouriteList = useSelector((state) => state.favourite.favouriteMovies);
return(
    <>
      <div className="row justify-content-center align-items-center p-4 ">
      {favouriteList.length < 1 ? (
        <div className="text-dark p-4 text-center h1 text-bg-danger rounded-5">
              Favourite Is Empty
        </div>
      ) : (
        <>
          {favouriteList.map((movie, index) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}
        </>
      )}
    </div>
    </>
)

}
export default FavouriteMovies;
