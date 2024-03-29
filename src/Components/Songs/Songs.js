import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import "./Songs.css"

function Songs() {
    const [songs, setSongs] = useState([])
    
    const navigate = useNavigate()

    let url = process.env.NODE_ENV === "production" ? "https://tuner-full-stack-back-end.onrender.com" : process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    async function fetchData() {
        try {
            let result = await axios.get(`${url}/songs`)

            setSongs(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="songs">
            <ul>
                {songs.map((song) => {
                    return (
                        <li key={song.id} onClick={() => {navigate(`/songs/${song.id}`)}}>{song.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Songs;