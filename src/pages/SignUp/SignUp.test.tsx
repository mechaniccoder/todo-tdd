import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import SignUp from "./SignUp";

const renderSignUp = () => {
  return render(<SignUp onSubmit={() => {}} />);
};

describe("SignUp", () => {
  it("handle id field", () => {
    renderSignUp();
    const idInput = screen.getByPlaceholderText("id") as HTMLInputElement;
    userEvent.type(idInput, "seunghwan");
    expect(idInput.value).toBe("seunghwan");
  });

  it("handle password field", () => {
    renderSignUp();
    const pwInput = screen.getByPlaceholderText("password") as HTMLInputElement;
    userEvent.type(pwInput, "123");
    expect(pwInput.value).toBe("123");
  });

  it("submits form", () => {
    const onSubmit = jest.fn();
    render(<SignUp onSubmit={onSubmit} />);
    const submitBtn = screen.getByText("submit");
    userEvent.click(submitBtn);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
