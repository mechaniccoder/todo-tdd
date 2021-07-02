import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const renderHome = () => {
  return render(<Home />);
};

describe("Home", () => {
  it("snapshot", () => {
    const { container } = renderHome();
    expect(container).toMatchSnapshot();
  });

  // it("navigates to sign up page", () => {
  //   renderHome();
  //   userEvent.click(screen.getByText(/go to/));
  //   expect(location.pathname).toBe("/signup");
  // });
});
