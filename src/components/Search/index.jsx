import React, { useState } from "react";
import axios from "axios";
import "../Search/style.css";

const SearchComp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost/Project/search_song.php", {
        searchTerm: searchTerm
      });

      if (response.data.status === "success") {
        setSearchResults(response.data.songs);
      } else {
        console.error("Error searching for songs:", response.data.message);
      }
    } catch (error) {
      console.error("Error searching for songs:", error);
    }
  };

  return (
    <>
      <div className="input" style={{ paddingTop: "15px" }}>
        <p>Search Song</p>
        <input
          type="text"
          name="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="generate_search"
          style={{ backgroundColor: "black", color: "white", padding: "10px", marginLeft: "10px" }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        {searchResults.map((song, index) => (
          <div key={index}>
            <p>Song: {song.SongName}</p>
            <p>Artist: {song.FirstName} {song.LastName}</p>
            <p>Album: {song.AlbumTitle}</p>
            <p>Duration: {song.Duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchComp;
