import React from "react";
import "./MovieComp.css";

export default function MovieComp({ title, date, desc, imgUrl }) {
  const truncatedDesc = truncateDescription(desc, 45);

  return (
    <div className="movie-card">
      <div className="img-card">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="Title">
        <span>{title}</span>
      </div>
      <div>
        <span className="date">{date.slice(0, 4)}</span>
      </div>
      <div className="Desc">{truncatedDesc}</div>
    </div>
  );
}

function truncateDescription(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.split(" ").slice(0, maxLength).join(" ") + "...";
}
