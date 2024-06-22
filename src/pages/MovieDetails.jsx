import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { imdbID } = useParams();

  const [movieDetails, setmovieDetails] = useState();

  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=bc509e0a&i=${imdbID}`;
    axios
      .get(url)
      .then((movie) => {
        console.log(movie.data);
        setmovieDetails(movie.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {movieDetails ? (
        <div className="w-[620px] rounded-xl mx-auto mt-2 flex gap-10 items-center bg-sky-100 p-5">
          <img
            src={movieDetails.Poster}
            alt=""
            className="object-fit rounded-xl w-[300px] h-[500px]"
          />
          <div>
            <p className="text-lg font-semibold">
              Title:{" "}
              <span className="text-md font-normal text-slate-600">
                {movieDetails.Title}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Actors:{" "}
              <span className="text-md font-normal text-slate-600">
                {movieDetails.Actors}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Director:{" "}
              <span className="text-md font-normal text-slate-600">
                {movieDetails.Director}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Plot:{" "}
              <span className="text-md font-normal text-slate-600">
                {movieDetails.Plot}
              </span>
            </p>
            <p className="text-lg font-semibold">
              ImdbRating:{" "}
              <span className="text-md font-normal px-1 py-1 bg-yellow-300 rounded-md text-black">
                {movieDetails.imdbRating ? movieDetails.imdbRating : ""}
              </span>
            </p>
            <p className="text-lg font-semibold">
              BoxOffice:{" "}
              <span className="text-md font-normal text-slate-600">
                {movieDetails.BoxOffice}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Language:{" "}
              <span className="text-md font-normal text-slate-600">
                {movieDetails.Language}
              </span>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-[200px] mx-auto mt-3">
        <Link to="/">
          <button className="text-lg text-white bg-black px-6 py-2 rounded-lg">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default MovieDetails;
