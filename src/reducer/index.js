import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { movies } from '../features/movies/reducer';

export default function createReducer() {
  return combineReducers({
    form: formReducer,
    movies
  });
}
