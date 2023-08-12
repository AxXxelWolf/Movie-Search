import React from "react";
import "./MovieComp.css";

export default function MovieComp() {
  return (
    <div className="movie-card">
      <div className="img-card">
        <img src="https://dunenewsnet.com/wp-content/uploads/2023/05/Dune-Part-Two-Movie-Poster-819x1024.jpg"></img>
      </div>
      <div className="Title">
        <span>Movie Name</span>
      </div>
      <div>
        <span className="date">Date</span>
      </div>
      <div className="Desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        molestie dolor in enim euismod, at maximus nisi ornare. Fusce congue
        eleifend mi eu porttitor. Praesent scelerisque mi non dui rutrum, rutrum
        posuere lectus pellentesque. Proin.
      </div>
    </div>
  );
}
