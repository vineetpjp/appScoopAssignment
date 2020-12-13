import { combineReducers } from "redux";
import auth from "reducers/auth";
import books from "reducers/book";
export default combineReducers({
  auth,
  books,
});
