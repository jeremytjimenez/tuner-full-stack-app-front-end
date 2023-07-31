import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Song.css"

function Song() {
  const [song, setSong] = useState(null);
  const [songs, setSongs] = useState([]);

  let url = process.env.NODE_ENV === "production" ? "https://tuner-full-stack-back-end.onrender.com" : process.env.REACT_APP_API_URL;

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDeleteById(id) {
    try {
      let result = await axios.delete(`${url}/songs/${id}`);

      let filteredSongs = songs.filter((item) => item !== result.data);

      setSongs(filteredSongs);

      alert("successfully deleted!");

      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      let result = await axios.get(`${url}/songs`);

      setSongs(result.data);

      let foundIndex = result.data.findIndex((item) => {
        return item.id === Number(id);
      });

      setSong(result.data[foundIndex]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="song">
      <section className="songDetails">
      <p className="songDetailsName">
        <strong>{song?.name}</strong>
      </p>
      <p>artist: {song?.artist}</p>
      <p>album: {song?.album}</p>
      <p>time: {song?.time}</p>
      <p>favorite? {song?.is_favorite ? "yes" : "no"}</p>

      </section>

      <button
        className="back"
        onClick={() => {
          navigate("/songs");
        }}
      >
        Go back
      </button>
      <button
      className="edit"
        onClick={() => {
          navigate(`/songs/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button className="delete" onClick={() => handleDeleteById(id)}>Delete</button>
    </div>
  );
}

export default Song;
