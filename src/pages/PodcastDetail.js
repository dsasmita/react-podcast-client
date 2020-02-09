import React from "react";
import axios from "axios";

import Header from "../components/Header.js";

class PodcastDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      podcast: []
    };
  }
  async componentDidMount() {
    const data = await axios.get(
      "https://json-server-heroku-zjqcjtotyv.now.sh/podcasts"
    );
    const id = this.props.match.params.id;
    const podcast = data.data.filter(function(podcast1) {
      return podcast1.id === parseInt(id);
    });
    console.log(podcast);
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default PodcastDetail;
