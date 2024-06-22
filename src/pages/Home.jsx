import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

function Home() {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchClicked & (searchTerm != "")) {
      axios
        .get(`https://www.omdbapi.com/?apikey=bc509e0a&s=${searchTerm}`)
        .then((res) => {
          console.log(res.data);
          setMovies(res.data);
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
  }

  function SearchHandler() {
    setSearchClicked(true);
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
      </div>

      <div className="w-[80vw] mx-[200px] flex gap-3 flex-wrap mt-10">
        {movies ? (
          movies.Response == "True" ? (
            movies.Search.map((movie) => (
              <MovieCard
                image={movie.Poster}
                title={movie.Title}
                imdbID={movie.imdbID}
              />
            ))
          ) : movies.Response == "False" ? (
            <p className="text-center text-2xl mx-auto mt-20">{movies.Error}</p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
