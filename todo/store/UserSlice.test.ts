import userReducer, { fetchOneUser, initialState } from './UserSlice';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test thunk', () => {
  it('pending', () => {
    const action = { type: fetchOneUser.pending.toString() };
    const expectedState = {
      fetchOneUser: {
        loading: true,
        error: null,
        data: null,
      },
    };
  });
});
