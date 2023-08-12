// App.jsx
import React, { useState } from "react";
import Search from "./Search";
import MovieComp from "./MovieComp";
import { fetchMovieData } from "./MovieData";
import "./App.css"; // Import your styles

function App() {
  const [movieData, setMovieData] = useState([]);

  const handleSearch = async (movieName) => {
    const data = await fetchMovieData(movieName);
    setMovieData(data);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="movie-grid">
        {movieData.map((movie, index) => (
          <MovieComp
            key={index}
            title={movie.title}
            date={movie.release_date}
            desc={movie.overview}
            imgUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
