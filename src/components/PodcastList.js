import React from "react";

import PodcastListContent from "./PodcastListContent.js";

class PodcastList extends React.Component {
  render() {
    const { podcasts } = this.props;
    return (
      <ul className="podcast-list">
        {podcasts.map(podcast => (
          <PodcastListContent key={podcast.id} podcast={podcast} />
        ))}
      </ul>
    );
  }
}

export default PodcastList;
