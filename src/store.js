import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { movieActions } from './app/movies/duck';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
