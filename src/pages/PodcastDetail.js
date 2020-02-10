import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header.js";

class PodcastDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      podcast: null
    };
  }
  async componentDidMount() {
    const data = await axios.get(
      "https://json-server-heroku-zjqcjtotyv.now.sh/podcasts"
    );
    const id = this.props.match.params.id;
    const podcast = data.data.filter(function(podcastSelected) {
      return podcastSelected.id === parseInt(id);
    });
    if (podcast.length === 1) {
      this.setState({
        podcast: podcast[0]
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.state.podcast !== null && (
          <Suspense fallback={<div>Loading...</div>}>
            <div className="detail-podcast">
              <div className="thumbnail">
                <img
                  src={this.state.podcast.thumbnail}
                  alt={this.state.podcast.title}
                />
              </div>
              <div className="info">
                <h3>{this.state.podcast.title}</h3>
                <a
                  className="link"
                  href={this.state.podcast.url}
                  target="blank"
                >
                  {this.state.podcast.url}
                </a>
                <div style={{ marginTop: "7px" }}>
                  <span>Episodes:</span>
                  {this.state.podcast.episodes &&
                    this.state.podcast.episodes.map(episode => (
                      <audio controls key={episode.id}>
                        <source src={episode.audio} type="audio/mp4" />
                        Your browser does not support the audio element.
                      </audio>
                    ))}
                </div>
              </div>
            </div>
          </Suspense>
        )}
        <div style={{ marginTop: "7px" }}>
          <Link to={"/"} className="detail">
            {"<<"} Kembali
          </Link>
        </div>
      </>
    );
  }
}

export default PodcastDetail;
