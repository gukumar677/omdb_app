import React from "react";
import { Link } from "react-router-dom";
import NoImage from "../assets/noimg.png";

const MovieCard = ({ image, title, imdbID }) => {
  return (
    <>
      <Link to={`/movie/${imdbID}`}>
        <div className="w-[260px] rounded-xl mt-2 flex gap-3 flex-col py-2 border-2 items-center justify-stretch">
          <img
            src={image ? image : NoImage}
            alt=""
            className="object-fit rounded-xl w-[220px] h-[200px]"
          />
          <p className="font-semibold mt-[-10px]">{title}</p>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
