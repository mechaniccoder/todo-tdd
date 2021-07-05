import userReducer from "./user";

describe("Test user store", () => {
  it("retuns initial state", () => {
    expect(userReducer(undefined, { type: "" })).toEqual({
      users: [
        {
          name: "seung",
          age: 28,
        },
        {
          name: "tae",
          age: 31,
        },
        {
          name: "jong",
          age: 35,
        },
        {
          name: "no",
          age: 25,
        },
      ],
    });
  });

  it("add users", () => {
    const previousState = {
      users: [{ name: "sungho", age: 30 }],
    };
    expect(
      userReducer(previousState, {
        type: "user/addUser",
        payload: {
          name: "hello",
          age: 29,
        },
      })
    ).toEqual({
      users: [
        { name: "sungho", age: 30 },
        { name: "hello", age: 29 },
      ],
    });
  });
});
