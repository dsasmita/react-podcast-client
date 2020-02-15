import React from "react";
import { render } from "@testing-library/react";

import Header from "../components/Header.js";

test("Check logo", () => {
  const { container } = render(<Header />);
  const logo = container.querySelector("img");
  expect(logo).toBeTruthy();
});
