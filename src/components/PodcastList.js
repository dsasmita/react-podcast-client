import React from "react";

import PodcastListContent from "./PodcastListContent.js";

const PodcastList = props => {
  const { podcasts, filterText } = props;

  const filteredPodCast = podcasts.filter(function(podcast) {
    return podcast.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
  });
  return (
    <ul className="podcast-list">
      {filteredPodCast.map(podcast => (
        <PodcastListContent key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
};

export default PodcastList;
