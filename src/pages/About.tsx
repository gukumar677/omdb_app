import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <h1>This is About page</h1>
        <Link to="/">
          <button className="px-3 py-2 bg-slate-400 text-black text-xl">
            back
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
