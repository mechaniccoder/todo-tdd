import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addUser } from "../store/user";

const UserList = () => {
  const users = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();

  return (
    <div>
      {users.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
      <button
        onClick={() =>
          dispatch(
            addUser({
              name: "fff",
              age: 29,
            })
          )
        }
      >
        add
      </button>
    </div>
  );
};

export default UserList;
