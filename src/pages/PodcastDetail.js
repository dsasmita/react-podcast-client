import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header.js";
import PodcastDetailContent from "../components/PodcastDetailContent.js";

class PodcastDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      podcast: null,
      loadingStatus: true,
      podcastFound: false
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
        podcast: podcast[0],
        podcastFound: true,
        loadingStatus: false
      });
    } else {
      this.setState({
        loadingStatus: false
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.state.loadingStatus && <h3>Loading ...</h3>}
        {this.state.loadingStatus === false &&
          this.state.podcastFound === false && <h3>Podcast notfound</h3>}
        {this.state.podcast !== null && (
          <PodcastDetailContent podcast={this.state.podcast} />
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
