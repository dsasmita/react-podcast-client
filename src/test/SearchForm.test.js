import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SearchForm from "../components/SearchForm.js";

let filterText = "";

const handleFilterText = text => {
  filterText = text;
};

test("Check form search", () => {
  filterText = "";
  const utils = render(
    <SearchForm filterText={filterText} handleFilterText={handleFilterText} />
  );
  const textToTest = "cerita";
  const input = utils.queryByPlaceholderText("search...");
  fireEvent.change(input, { target: { value: textToTest } });
  expect(filterText).toEqual(textToTest);
});
