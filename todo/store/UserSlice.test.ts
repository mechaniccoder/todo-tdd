import userReducer, { fetchOneUser, initialState } from './UserSlice';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios, { AxiosAdapter } from 'axios';
import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { AnyAction } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test thunk', () => {
  it('success', async () => {
    const getMock = axios.get as jest.Mock;
    (axios.get as jest.Mock).mockImplementationOnce(() => ({
      data: {
        username: 'seunghwan',
        email: 'seunghwan@orbisai.co',
      },
    }));

    const store = mockStore({});
    await store.dispatch(fetchOneUser('1') as any);

    expect(store.getActions()[0].type).toEqual(fetchOneUser.pending.type);
    expect(store.getActions()[1]).toEqual(
      expect.objectContaining({
        type: fetchOneUser.fulfilled.type,
        payload: { username: 'seunghwan', email: 'seunghwan@orbisai.co' },
      }),
    );
  });

  it('failed', async () => {
    const store = mockStore({});

    (axios.get as jest.Mock).mockImplementationOnce(() => {
      throw {
        response: {
          data: {
            message: 'Error: fetch user',
          },
        },
      };
    });

    await store.dispatch(fetchOneUser('2') as any);
    expect(store.getActions()[0].type).toEqual(fetchOneUser.pending.type);
    expect(store.getActions()[1]).toEqual(
      expect.objectContaining({
        payload: {
          response: {
            data: {
              message: 'Error: fetch user',
            },
          },
        },
      }),
    );
  });
});

describe('thunk affects store', () => {
  it('should update loading state', () => {
    const expectedState = {
      fetchOneUser: {
        loading: true,
        data: null,
        error: null,
      },
    };
    const state = UserSlice(initialState, { type: fetchOneUser.pending.type });
    expect(state).toEqual(expectedState);
  });
  it('should update fulfilled state', () => {
    const expectedState = {
      fetchOneUser: {
        loading: false,
        data: { username: 'seunghwan', email: 'seunghwan@orbisai.co' },
        error: null,
      },
    };
    const state = UserSlice(initialState, {
      type: fetchOneUser.fulfilled.type,
      payload: { username: 'seunghwan', email: 'seunghwan@orbisai.co' },
    });
    expect(state).toEqual(expectedState);
  });

  it('should update rejected state', () => {
    const expectedState = {
      fetchOneUser: {
        loading: false,
        data: null,
        error: { message: 'error' },
      },
    };
    const state = UserSlice(initialState, {
      type: fetchOneUser.rejected.type,
      payload: { message: 'error' },
    });
    expect(state).toEqual(expectedState);
  });
});
