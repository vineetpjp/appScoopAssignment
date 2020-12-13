import { GET_BOOK, SET_BOOKS, SIGN_IN, SIGN_OUT } from "./types";
import history from "history.js";

import axios from "axios";
export const signIn = () => (dispatch) => {
  dispatch({
    type: SIGN_IN,
  });
};
export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
};

export const getBooks = () => async (dispatch) => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a"
  );
  dispatch({
    type: SET_BOOKS,
    payload: response.data,
  });
};

export const getBook = (id) => (dispatch) => {
  dispatch({ type: GET_BOOK, payload: id });
};
