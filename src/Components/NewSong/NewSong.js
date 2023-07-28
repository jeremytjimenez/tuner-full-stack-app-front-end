import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewSong() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const navigate = useNavigate();

  let url = process.env.REACT_APP_API_URL;

  async function handleOnSubmit(e) {
    e.preventDefault();

      try {
        let result = await axios.post(`${url}/songs`, song);

        setSong({
            name: "",
            artist: "",
            album: "",
            time: "",
            is_favorite: false,
          });

        alert("Successful!");

        navigate(`/songs`);
      } catch (e) {
        console.log(e);
      }

  }

  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <h2>Add song</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={song?.name}
            onChange={(e) =>
              setSong({
                ...song,
                name: e.target.value,
              })
            }
            required
          />
        </div>

        <div>
          <label>Artist</label>
          <input
            type="text"
            value={song?.artist}
            onChange={(e) => {
              setSong({
                ...song,
                artist: e.target.value,
              });
            }}
            required
          />
        </div>

        <div>
          <label>Album</label>
          <input
            type="text"
            value={song?.album}
            onChange={(e) =>
              setSong({
                ...song,
                album: e.target.value,
              })
            }
            required
          />
        </div>

        <div>
          <label>Time</label>
          <input
            type="text"
            value={song?.time}
            onChange={(e) =>
              setSong({
                ...song,
                time: e.target.value,
              })
            }
            required
          />
        </div>

        <div>
          <label>is favorite?</label>
          <input
            type="checkbox"
            checked={song?.is_favorite}
            onChange={(e) =>
              setSong({
                ...song,
                is_favorite: !song.is_favorite,
              })
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewSong;
