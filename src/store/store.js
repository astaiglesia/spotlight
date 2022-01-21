import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import albumsReducer from "../reducers/albums";
import artistsReducer from "../reducers/artsists";
import playlistReducer from "../reducers/playlist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a redux store 
// pass into store state object of combined reducers
// 
const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;