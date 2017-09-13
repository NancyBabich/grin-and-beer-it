import { compose, createStore, combineReducers } from 'redux';
import { modalStateReducer } from '../reducers/index';

export const configure = () => {
  const reducer = combineReducers({
    isModal: modalStateReducer
  });

  const store = createStore(
    reducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  return store;
};
