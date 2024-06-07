import React from "react";
import "../Songs/style.css";
import play from "../../icons/icons8-play-30.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from "axios"
import { useEffect, useState } from "react";


const TopSongs = () => {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    const fetchTopSongs = async () => {
      try {
        const response = await axios.get('http://localhost/Project/top5_songs.php');
        if (response.data.status === 'success') {
          setTopSongs(response.data.songs);
        } else {
          console.error('Error fetching top songs:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching top songs:', error);
      }
    };

    fetchTopSongs();
  }, []);

  return (
    <>
      <div className="with-button">
        <div className="container_songs">
          <h1 className="text-xl font-semibold mb-2 pl-7 text-white">
            Top Songs
          </h1>
          <div className="content_songs">
            {topSongs.map((song, index) => (
              <div className="first-song" key={index}>
                <div className="song-info">
                  <div className="song-title">
                    <h2 style={{ fontSize: "20px", fontWeight: "700" }}>{song.SongName}</h2>
                  </div>
                  <div className="song-author">
                    <h4>{song.FirstName} {song.LastName}</h4>
                  </div>
                </div>
                <div className="play-button">
                  <img
                    src={play}
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                    alt="Play Button"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Nav.Link href="#TopSongs" as={Link} to="/topsongs">
          <button className="see-more">See More</button>
        </Nav.Link>
      </div>
    </>
  );
};

export default TopSongs;
