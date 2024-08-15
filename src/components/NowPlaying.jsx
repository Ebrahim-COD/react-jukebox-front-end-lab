const NowPlaying = ({ track }) => {
  if (!track) {
    return null;
  }

  return (
    <div>
      <h2>Now Playing</h2>
      <p>
        <strong>Title:</strong> {track.title}
      </p>
      <p>
        <strong>Artist:</strong> {track.artist}
      </p>
    </div>
  );
};

export default NowPlaying;
