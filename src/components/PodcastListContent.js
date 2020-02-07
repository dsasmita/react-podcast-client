import React from "react";

class PodcastListContent extends React.Component {
  render() {
    const { podcast } = this.props;
    return (
      <li>
        <img className="thumbnail" src={podcast.thumbnail} alt="" />
        <div className="info">
          <h3>Ceritanya Developer</h3>
          <a className="link" href={podcast.url} target="blank">
            {podcast.url}
          </a>
          <div style={{ marginTop: "7px" }}>
            <a className="detail" href="#/">
              Lihat >>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default PodcastListContent;
