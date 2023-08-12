import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [newName, setNewName] = useState("");
  return (
    <div>
      <div className="Search-header">
        <div className="Search-header-line">
          <span className="Search-header-text-white">Search</span>
          <span className="Search-header-text-red"> Movie</span>
        </div>
        <div className="Search-header-line">
          <span className="Search-subheader-text">
            Get Details of Movies that you are looking for !
          </span>
        </div>
      </div>
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
          />

          <button className="Sbtn">Search</button>
        </div>
      </div>
    </div>
  );
}
