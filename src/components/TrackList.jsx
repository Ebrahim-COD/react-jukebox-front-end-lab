import React from "react";
import { Link } from "react-router-dom";
import * as trackService from "../services/trackService";
import { useState } from "react";

const TrackList = ({ tracks, setTracks, setCurrentTrack }) => {
  const handleDelete = async (trackId) => {
    try {
      await trackService.deleteTrack(trackId);
      const updatedTracks = tracks.filter((track) => track._id !== trackId);
      setTracks(updatedTracks);
    } catch (error) {
      console.error("Error deleting track:", error);
    }
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div>
      <h2>Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            <strong>{track.title}</strong> by {track.artist}
            <Link to={`/edit-track/${track._id}`}>Edit</Link>
            <button onClick={() => handleDelete(track._id)}>Delete</button>
            <button onClick={() => handlePlay(track)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
