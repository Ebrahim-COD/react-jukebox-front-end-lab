import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrackList from "./TrackList";
import * as trackService from "../services/trackService";
import NowPlaying from "./NowPlaying";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await trackService.getTracks();
        setTracks(data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <h1>Track List</h1>
      <Link to="/add-track">
        <button>Add New Track</button>
      </Link>
      <TrackList
        tracks={tracks}
        setTracks={setTracks}
        setCurrentTrack={setCurrentTrack}
      />
      <NowPlaying track={currentTrack} />
    </div>
  );
};

export default Home;
