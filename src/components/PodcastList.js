import React from "react";

import PodcastListContent from "./PodcastListContent.js";

class PodcastList extends React.Component {
  render() {
    const { podcasts, filterText } = this.props;

    const filteredPodCast = podcasts.filter(function(podcast) {
      return (
        podcast.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
      );
    });
    return (
      <ul className="podcast-list">
        {filteredPodCast.map(podcast => (
          <PodcastListContent key={podcast.id} podcast={podcast} />
        ))}
      </ul>
    );
  }
}

export default PodcastList;
