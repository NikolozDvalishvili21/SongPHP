import React from "react";
import "../Songs/style.css";
import play from "../../icons/icons8-play-30.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const TopSongs = () => {
  return (
    <>
      <div className="with-button">
        <div className="container_songs">
          <h1 className="text-xl font-semibold mb-2 pl-7 text-white">
            Top Songs
          </h1>
          <div className="content_songs">
            <div className="first-song">
              <div className="song-info">
                <div className="song-title">
                  <h2 style={{ fontSize: "20px", fontWeight: "700" }}>PRIDE</h2>
                </div>
                <div className="song-author">
                  <h4>Kendrick Lamar</h4>
                </div>
              </div>
              <div className="play-button">
                <img
                  src={play}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="first-song">
              <div className="song-info">
                <div className="song-title">
                  <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
                    2 Milli
                  </h2>
                </div>
                <div className="song-author">
                  <h4>Soulja Boy</h4>
                </div>
              </div>
              <div className="play-button">
                <img
                  src={play}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="first-song">
              <div className="song-info">
                <div className="song-title">
                  <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
                    Comfortably Numb
                  </h2>
                </div>
                <div className="song-author">
                  <h4>Pink Floyd</h4>
                </div>
              </div>
              <div className="play-button">
                <img
                  src={play}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="first-song">
              <div className="song-info">
                <div className="song-title">
                  <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
                    Plastic Trees
                  </h2>
                </div>
                <div className="song-author">
                  <h4>Radiohead</h4>
                </div>
              </div>
              <div className="play-button">
                <img
                  src={play}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="first-song">
              <div className="song-info">
                <div className="song-title">
                  <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
                    I'm God
                  </h2>
                </div>
                <div className="song-author">
                  <h4>Lil B</h4>
                </div>
              </div>
              <div className="play-button">
                <img
                  src={play}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </div>
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
