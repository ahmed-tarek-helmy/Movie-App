import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/AxiosHelper";
const MovieDetail =()=>{
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/${params.id}`)
      .then((res) => {
        console.log(`movie data`, res.data);
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  });
  return(
      <>
       <div className="card m-auto mt-5 text-bg-dark" style={{ width: "70%" }}>
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
        alt="Cardimagecap"
      />
      <div className="card-body ">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="card-title">
            {movieDetails.title}
          </h1>
          <h5 className="badge bg-danger fs-5 rounded-5">
            Rate : {movieDetails.vote_average}
          </h5>
        </div>
        <p className="card-text bg-dark p-1 text-white h6">
          {movieDetails.overview}
        </p>
      </div>
    </div>
      </>
  )
  }
  export default MovieDetail;
