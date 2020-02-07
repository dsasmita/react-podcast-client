import React from "react";
import axios from "axios";

import "./assets/main.css";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import PodcastList from "./components/PodcastList.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const data = await axios.get(
      "https://json-server-heroku-zjqcjtotyv.now.sh/podcasts"
    );
    this.setState({
      data: data.data
    });
  }
  render() {
    return (
      <>
        <Header />
        <SearchForm />
        <PodcastList podcasts={this.state.data} />
      </>
    );
  }
}

export default App;
