import { configureStore, Dispatch, Store } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import TodoReducer from './TodoSlice';

function initStore(preloadedState: any) {
  return configureStore({
    reducer: {
      todo: TodoReducer,
    },
    preloadedState,
  });
}

let store: Store | undefined;

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

type ReduxStore = ReturnType<typeof initStore>;
export type RootState = ReturnType<ReduxStore['getState']>;
export type AppDispatch = Dispatch;
