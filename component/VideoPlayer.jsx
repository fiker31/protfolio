function VideoPlayer({ id }) {
  return (
    <video
      src={`/api/videos?videoId=${id}`}
      width="300px"
      height="auto"
      controls
      id="video-player"
    />
  );
}

export default VideoPlayer;