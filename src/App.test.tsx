import { getByText, render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderApp = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe("Router", () => {
  it("snapshots App", () => {
    const { container } = renderApp();
    expect(container).toMatchSnapshot();
  });

  it("has 3 Links", () => {
    renderApp();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

  it("navigates to Home when user clicks Link", () => {
    renderApp();
    userEvent.click(screen.getByText("Home"));
    expect(location.pathname).toBe("/");
    expect(screen.getByText(/go to sign up/)).toBeTruthy();
  });

  it("navigates to Sign Up when user clicks Link", () => {
    renderApp();
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText(/this is sign up page/)).toBeTruthy();
  });

  it("navigates to Sign In when user clicks Link", () => {
    renderApp();
    userEvent.click(screen.getByText("Sign In"));
    expect(location.pathname).toBe("/signin");
  });
});

export {};
