import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

function Home() {
  const [movie, setMovie] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchClicked) {
      axios
        .get(`https://www.omdbapi.com/?apikey=bc509e0a&t=${searchTerm}`)
        .then((movie) => {
          console.log(movie.data);
          setMovie(movie.data);
          setSearchClicked(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error);
        });
    }
  });

  function handleChange(event) {
    setSearchTerm(event.target.value);
    console.log("value:", searchTerm);
  }

  function SearchHandler() {
    setSearchClicked(true);
    console.log(searchClicked);
  }

  return (
    <>
      <div className="w-[100vw]">
        <div className="text-center text-2xl mt-10">
          <input
            type="text"
            placeholder="Search movie..."
            className="w-[520px] h-[65px] bg-slate-100 rounded-s-lg  px-3 focus:outline-violet-300"
            onChange={handleChange}
            value={searchTerm}
          />
          <button
            className="px-4 py-4 font-semibold bg-violet-600 rounded-e-lg"
            onClick={SearchHandler}
          >
            Search
          </button>
        </div>
        {movie ? (
          movie.Response == "True" ? (
            <MovieCard
              image={movie.Poster}
              title={movie.Title}
              actors={movie.Actors}
              director={movie.Director}
              plot={movie.Plot}
              imdbRating={movie.imdbRating}
              boxOffice={movie.BoxOffice}
              language={movie.Language}
            />
          ) : (
            <p className="text-center text-2xl mx-auto mt-20">{movie.Error}</p>
          )
        ) : (
          <p className="text-center text-2xl mx-auto mt-20">
            {error ? error.message : ""}
          </p>
        )}
      </div>
  </>
  );
}

export default Home;
