import React from "react";
import axios from "axios";

import Header from "../components/Header.js";
import SearchForm from "../components/SearchForm.js";
import PodcastList from "../components/PodcastList.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filterText: ""
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
  handleFilterText = filterText => {
    this.setState({
      filterText: filterText
    });
  };
  render() {
    return (
      <>
        <Header />
        <SearchForm
          filterText={this.state.filterText}
          handleFilterText={this.handleFilterText}
        />
        <PodcastList
          podcasts={this.state.data}
          filterText={this.state.filterText}
        />
      </>
    );
  }
}

export default App;
