import React from "react";
import { useNavigate } from "react-router-dom";
import CollapsibleExample from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import "../AdminPanel/style.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artist, setArtists] = useState([]);
  const [user, setUsers] = useState([]);
  
  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Project/admin/get_info/get_albums.php"
        );
        console.log("Response data:", response.data);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
        setAlbums([]);
      }
    };

    fetchAlbums();
  }, []);

  // Add this just before the return statement
  console.log("Albums:", albums);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Project/admin/get_info/get_songs.php"
        );
        console.log("Response data:", response.data);
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
        setSongs([]);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    const fetchSingers = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Project/admin/get_info/get_artist.php"
        );
        console.log("Response data:", response.data);
        setArtists(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
        setArtists([]);
      }
    };

    fetchSingers();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Project/admin/get_info/get_users.php"
        );
        console.log("Response data:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost/Project/admin/delete_info/delete_user.php",
        JSON.stringify({ id })
      );
      console.log(response.data);
      // After deletion, update the state to remove the deleted user
      setUsers(user.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleDeleteArtist = async (singer_id) => {
    try {
      const response = await axios.post(
        "http://localhost/Project/admin/delete_info/delete_artist.php",
        JSON.stringify({ singer_id: singer_id }) // Correct property name
      );
      console.log(response.data);
      // After deletion, update the state to remove the deleted user
      setUsers(user.filter((singer) => singer.singer_id !== singer_id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Gather form data
    const formData = new FormData(event.target);

    // Convert FormData to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Send form data to server
    try {
      const response = await axios.post(
        "http://localhost/Project/admin/upload_info/upload_artist.php",
        jsonData
      );
      console.log(response.data); // Log the response from the server
      // Perform any other actions based on the response if needed
    } catch (error) {
      console.error("Error uploading singer:", error);
    }
  };

  const handleAlbumUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Gather form data
    const formData = new FormData(event.target);
  
    // Convert FormData to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    // Send form data to server
    try {
      const response = await axios.post(
        "http://localhost/Project/admin/upload_info/upload_album.php",
        jsonData
      );
      console.log(response.data); // Log the response from the server
      // Perform any other actions based on the response if needed
    } catch (error) {
      console.error("Error uploading album:", error);
    }
  };

  const handleSongUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Gather form data
    const formData = new FormData(event.target);

    // Convert FormData to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Send form data to server
    try {
      const response = await axios.post(
        "http://localhost/Project/admin/upload_info/upload_song.php",
        jsonData
      );
      console.log(response.data); // Log the response from the server
      // Perform any other actions based on the response if needed
    } catch (error) {
      console.error("Error uploading song:", error);
    }
  };
  

  return (
    <>
      <CollapsibleExample onSignOut={handleSignOut} />

      <section>
        <div className="album_information">
          <form
            action=""
            style={{ padding: "20px" }}
            onSubmit={handleAlbumUpload}
            method="post"
          >
            <h2 style={{ fontWeight: "700" }}>Upload Album:</h2>
            <br />
            <br />
            <label htmlFor="album_title">Album Title</label>
            <br />
            <input type="text" name="album_title" required />
            <br />
            <br />
            <label htmlFor="singer_id">Singer ID</label>
            <br />
            <input type="text" name="singer_id" required />
            <br />
            <br />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "70px",
                height: "35px",
              }}
              type="submit"
            >
              Upload
            </button>
          </form>
          <div className="information">
            <h2>Albums</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Singer ID</th>
                </tr>
              </thead>
              <tbody>
                {albums.map((album, index) => (
                  <tr key={index}>
                    <td>{album.title}</td>
                    <td>{album.singer_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="album_information">
          <form action="" style={{ padding: "20px" }} onSubmit={handleSongUpload}>
            <h2 style={{ fontWeight: "700" }}>Upload Song:</h2>
            <br />
            <br />
            <label htmlFor="songTitle">Song Title</label>
            <br />
            <input type="text" name="songTitle" />
            <br />
            <br />
            <label htmlFor="duration">Duration</label>
            <br />
            <input type="text" name="duration" />
            <br />
            <br />
            <label htmlFor="singerId">Singer ID</label>
            <br />
            <input type="text" name="singerId" />
            <br />
            <br />
            <label htmlFor="albumId">Album ID</label>
            <br />
            <input type="text" name="albumId" />
            <br /> <br />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "70px",
                height: "35px",
              }}
              type="submit"
            >
              Upload
            </button>
          </form>
          <div className="information">
            <h2>Songs</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Duration</th>
                  <th>Singer ID</th>
                  <th>Album ID</th>
                  <th>Likes</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((songs, index) => (
                  <tr key={index}>
                    <td>{songs.SongName}</td>
                    <td>{songs.Duration}</td>
                    <td>{songs.singer_id}</td>
                    <td>{songs.album_id}</td>
                    <td>{songs.likes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="album_information">
          <form
            action=""
            style={{ padding: "20px" }}
            onSubmit={handleSubmit}
            method="post"
          >
            <h2 style={{ fontWeight: "700" }}>Upload Artist:</h2>
            <br />
            <br />
            <label htmlFor="firstName">First Name</label>
            <br />
            <input type="text" name="firstName" required />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input type="text" name="lastName" required />
            <br />
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <input type="text" name="description" required />
            <br />
            <br />
            <label htmlFor="age">Age</label>
            <br />
            <input type="text" name="age" required />
            <br />
            <br />
            <label htmlFor="topAlbum">Top Album</label>
            <br />
            <input type="text" name="topAlbum" required />
            <br />
            <br />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "70px",
                height: "35px",
              }}
              type="submit"
            >
              Upload
            </button>
          </form>
          <div className="information">
            <h2>Artists</h2>
            <table>
              <thead>
                <tr>
                  <th>Artist ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Description</th>
                  <th>Age</th>
                  <th>Top Album</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {artist.map((singer, index) => (
                  <tr key={index}>
                    <td>{singer.singer_id}</td>
                    <td>{singer.FirstName}</td>
                    <td>{singer.LastName}</td>
                    <td>{singer.Description}</td>
                    <td>{singer.Age}</td>
                    <td>{singer.Top_Album}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteArtist(singer.singer_id)}
                    >
                      Delete
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="information" style={{ padding: "15px" }}>
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Password</th>
                <th>Roles</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.roles}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminPanel;
