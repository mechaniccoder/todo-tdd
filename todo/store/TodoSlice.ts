import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface Todo {
  text: string;
  done: boolean;
}

export const initialTodoState: Todo[] = [];

const TodoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
