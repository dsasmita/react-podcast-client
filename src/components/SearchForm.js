import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <form className="form-search">
        <input type="text" placeholder="search..." />{" "}
        <button type="button">Find</button>
      </form>
    );
  }
}

export default SearchForm;
