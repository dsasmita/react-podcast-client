import React from "react";

const PodcastDetailContent = props => {
  const { podcast } = props;
  return (
    <div className="detail-podcast">
      <div className="thumbnail">
        <img src={podcast.thumbnail} alt={podcast.title} />
      </div>
      <div className="info">
        <h3>{podcast.title}</h3>
        <a className="link" href={podcast.url} target="blank">
          {podcast.url}
        </a>
        <div style={{ marginTop: "7px" }}>
          <span>Episodes:</span>
          {podcast.episodes &&
            podcast.episodes.map(episode => (
              <audio controls key={episode.id}>
                <source src={episode.audio} type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            ))}
        </div>
      </div>
    </div>
  );
};
export default PodcastDetailContent;
