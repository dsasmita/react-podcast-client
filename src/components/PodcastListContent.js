import React from "react";
import { Link } from "react-router-dom";

const PodcastListContent = props => {
  const { podcast } = props;
  return (
    <li>
      <img className="thumbnail" src={podcast.thumbnail} alt="" />
      <div className="info">
        <h3>{podcast.title}</h3>
        <a className="link" href={podcast.url} target="blank">
          {podcast.url}
        </a>
        <div style={{ marginTop: "7px" }}>
          <Link to={"/" + podcast.id} className="detail">
            Lihat >>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PodcastListContent;
