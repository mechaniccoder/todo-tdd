import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiState<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}

interface fetchOneUserData {
  username: string;
  email: string;
}

interface InitialState {
  fetchOneUser: ApiState<fetchOneUserData>;
}

export const initialState: InitialState = {
  fetchOneUser: {
    loading: false,
    error: null,
    data: null,
  },
};

export const fetchOneUser = createAsyncThunk<fetchOneUserData, string, { state: InitialState }>(
  'user/fetchOneUser',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      return res.data;
    } catch (err) {
      console.log(err);
      rejectWithValue(err.response.data.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOneUser.pending.toString()]: (state, action) => {
      state.fetchOneUser.loading = true;
      state.fetchOneUser.data = null;
      state.fetchOneUser.error = null;
    },
    [fetchOneUser.fulfilled.toString()]: (state, action) => {
      state.fetchOneUser.loading = false;
      state.fetchOneUser.data = action.payload;
    },
    [fetchOneUser.rejected.toString()]: (state, action) => {
      state.fetchOneUser.loading = false;
      state.fetchOneUser.error = action.payload;
    },
  },
});

export default userSlice.reducer;
