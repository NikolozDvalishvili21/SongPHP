import React, { useState, useEffect } from "react";
import CollapsibleExample from "../../components/Navbar";
import { Table } from "flowbite-react";
import axios from "axios";
import "flowbite/dist/flowbite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TopSongsPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Project/get_songs.php"
        );
        if (response.data.status === "success") {
          const updatedSongs = response.data.songs.map((song) => ({
            ...song,
            isLiked: false,
          }));
          setSongs(updatedSongs);
        } else {
          console.error("Error fetching songs:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const handleLike = async (songName, index) => {
    try {
      const response = await axios.post(
        "http://localhost/Project/like_song.php",
        {
          song_name: songName,
        }
      );

      if (response.data.status === "success") {
        const updatedSongs = [...songs];
        updatedSongs[index].isLiked = !updatedSongs[index].isLiked; // Toggle isLiked state
        setSongs(updatedSongs);
      } else {
        alert("Failed to like the song");
      }
    } catch (error) {
      console.error("Error liking song:", error);
      alert("Error liking song");
    }
  };

  const handleUnlike = async (songName, index) => {
    try {
      const response = await axios.post(
        "http://localhost/Project/unlike_song.php",
        {
          song_name: songName,
        }
      );

      if (response.data.status === "success") {
        const updatedSongs = [...songs];
        updatedSongs[index].isLiked = !updatedSongs[index].isLiked; // Toggle isLiked state
        setSongs(updatedSongs);
      } else {
        alert("Failed to unlike the song");
      }
    } catch (error) {
      console.error("Error unliking song:", error);
      alert("Error unliking song");
    }
  };


  


  return (
    <>
      <CollapsibleExample />
      <div className="overflow-x-auto p-8 font-tkt">
        <Table style={{ fontSize: "17px" }}>
          <Table.Head>
            <Table.HeadCell
              className="p-6"
              style={{
                fontSize: "17px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Song
            </Table.HeadCell>
            <Table.HeadCell
              style={{
                fontSize: "17px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Artist
            </Table.HeadCell>
            <Table.HeadCell
              style={{
                fontSize: "17px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Album
            </Table.HeadCell>
            <Table.HeadCell
              style={{
                fontSize: "17px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Duration
            </Table.HeadCell>
            <Table.HeadCell
              style={{ backgroundColor: "black", color: "white" }}
            ></Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {songs.map((song, index) => (
              <Table.Row
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-black dark:bg-gray-700"
                }
              >
                <Table.Cell className="whitespace-nowrap font-medium p-6">
                  <div className="song-and-author">
                    <p style={{ color: index % 2 === 0 ? "black" : "white" }}>
                      {song.SongName}
                    </p>
                  </div>
                </Table.Cell>
                <Table.Cell
                  style={{ color: index % 2 === 0 ? "black" : "white" }}
                >
                  {song.FirstName} {song.LastName}
                </Table.Cell>
                <Table.Cell
                  style={{ color: index % 2 === 0 ? "black" : "white" }}
                >
                  {song.AlbumTitle}
                </Table.Cell>
                <Table.Cell
                  style={{ color: index % 2 === 0 ? "black" : "white" }}
                >
                  {song.Duration}
                </Table.Cell>
                <Table.Cell style={{ display: "flex", gap: "20px" }}>
                
                  {song.isLiked ? (
                    <a
                      href="#"
                      onClick={() => handleUnlike(song.SongName, index)}
                      className="font-medium text-orange-600 hover:underline"
                    >
                      Unlike
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={() => handleLike(song.SongName, index)}
                      className="font-medium text-orange-600 hover:underline"
                    >
                      Like
                    </a>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default TopSongsPage;
