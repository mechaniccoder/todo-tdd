import { render } from "@testing-library/react";
import React from "react";
import Home from "./Home";

const renderHome = () => {
  return render(<Home />);
};

describe("Home", () => {
  it("snapshot", () => {
    const { container } = renderHome();
    expect(container).toMatchSnapshot();
  });
});
