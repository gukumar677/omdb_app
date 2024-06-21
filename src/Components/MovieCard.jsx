import React from "react";

const MovieCard = ({ image, title, actors, director, plot, imdbRating, boxOffice, language }) => {
  return (
    <>
      <div className="w-[620px] rounded-xl mx-auto mt-2 flex gap-10 items-center bg-sky-100 p-5">
        <img src={image} alt="" className="object-cover rounded-xl" />
        <div>
            <p className="text-lg font-semibold">Title: <span className="text-md font-normal text-slate-600">{title}</span></p>
            <p className="text-lg font-semibold">Actors: <span className="text-md font-normal text-slate-600">{actors}</span></p>
            <p className="text-lg font-semibold">Director: <span className="text-md font-normal text-slate-600">{director}</span></p>
            <p className="text-lg font-semibold">Plot: <span className="text-md font-normal text-slate-600">{plot}</span></p>
            <p className="text-lg font-semibold">ImdbRating: <span className="text-md font-normal px-1 py-1 bg-yellow-300 rounded-md text-black">{imdbRating? imdbRating : ""}</span></p>
            <p className="text-lg font-semibold">BoxOffice: <span className="text-md font-normal text-slate-600">{boxOffice}</span></p>
            <p className="text-lg font-semibold">Language: <span className="text-md font-normal text-slate-600">{language}</span></p>
            
            
        </div>
      </div>
    </>
  );
};

export default MovieCard;
