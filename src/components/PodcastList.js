import React, { Suspense, lazy } from "react";

const PodcastListContent = lazy(() => import("./PodcastListContent.js"));

const PodcastList = props => {
  const { podcasts, filterText, loadingStatus } = props;

  const filteredPodCast = podcasts.filter(function(podcast) {
    return podcast.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
  });
  return (
    <>
      {loadingStatus ? (
        <h3>Loading...</h3>
      ) : (
        <ul className="podcast-list">
          {filteredPodCast.map(podcast => (
            <Suspense key={podcast.id} fallback={<div>Loading...</div>}>
              <PodcastListContent podcast={podcast} />
            </Suspense>
          ))}
        </ul>
      )}
    </>
  );
};

export default PodcastList;
