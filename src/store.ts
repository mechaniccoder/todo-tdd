import { configureStore } from "@reduxjs/toolkit";
import counter from "./store/counter";
import user from "./store/user";

const store = configureStore({
  reducer: {
    counter,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
