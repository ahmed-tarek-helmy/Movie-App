import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/AxiosHelper";

import MovieCard from "../../components/movieCard/MovieCard";
import "./Movies.css"


let index = 1;
const Movies =()=>{
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreMovies = () => {
    index++;
    setIsLoading(true);
    axiosInstance
      .get(
        `/popular?language=en-US&page=${index}`
      )
      .then((res) => {
        setMovies([...movies, ...res.data.results]);
        setIsLoading(false);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(
        `/popular?language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data.results)
        setMovies(res.data.results);
        setIsLoading(false);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);



return(
    <>
    <div className="row justify-content-center align-items-center">
      {movies.length < 1 ? (
        <div style={{ width: "50px", height: "50px" }}>
          <i className="fa-solid fa-spinner fa-spin text-primary fa-3x"></i>
        </div>
      ) : (
        <>
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}
          (
          <button
            className="btn btn-danger"
            onClick={() => {
              loadMoreMovies();
            }}
          >
            {isLoading ? (
              // <div style={{ width: "10px", height: "10px" }}>
              <i className="fa-solid fa-spinner fa-spin text-white fa-2x"></i>
            ) : (
              // </div>
              "load more"
            )}
          </button>
          )
        </>
      )}
    </div> 
    </>
)

}
export default Movies;