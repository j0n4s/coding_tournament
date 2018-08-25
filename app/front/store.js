import {applyMiddleware, createStore, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
let store;

export default function create(initialData = {}) {
  store = createStore(
    reducer,
    initialData,
    compose(
      applyMiddleware(thunk)
    )
  );

  return store;
}

if (!store) {
  store = create();
}

export {store};
