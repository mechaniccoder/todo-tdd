import React from "react";
import { render } from "@testing-library/react";
import { useAppSelector, useAppDispatch } from "../hooks";
import UserList from "./UserList";
import userEvent from "@testing-library/user-event";

jest.mock("../hooks");

describe("UserList", () => {
  const useAppSelectorMock = useAppSelector as jest.Mock;
  useAppSelectorMock.mockImplementation((selector) =>
    selector({
      user: {
        users: [
          {
            name: "seung",
            age: 25,
          },
          {
            name: "han",
            age: 27,
          },
          {
            name: "jun",
            age: 28,
          },
        ],
      },
    })
  );
  it("renders users", () => {
    const { container } = render(<UserList />);
    expect(container).toHaveTextContent("seung");
  });

  it("adds user", () => {
    const dispatch = jest.fn();
    const useAppDispatchMock = useAppDispatch as jest.Mock;
    useAppDispatchMock.mockImplementation(() => dispatch);

    const { getByText } = render(<UserList />);
    const addBtn = getByText("add");
    userEvent.click(addBtn);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      payload: { age: 29, name: "fff" },
      type: "user/addUser",
    });
  });
});
