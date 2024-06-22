import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[70px] px-[100px] bg-neutral-300 flex justify-between items-center">
        <h1 className="text-xl text-black py-4">OMDB App</h1>
        <div className="text-xl flex gap-5">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
