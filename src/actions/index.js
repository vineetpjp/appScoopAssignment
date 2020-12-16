import { GET_BOOK, LOAD_BOOKS, SET_BOOKS, SIGN_IN, SIGN_OUT } from "./types";
// import history from "history.js";

// import axios from "axios";
export const signIn = () => ({
  type: SIGN_IN,
});
export const signOut = () => ({
  type: SIGN_OUT,
});

export const loadBooks = () => ({
  type: LOAD_BOOKS,
});

export const getBooks = (data) => ({
  type: SET_BOOKS,
  payload: data,
});

export const getBook = (id) => ({ type: GET_BOOK, payload: id });

// const response = await axios.get(
// "https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a"
// );
