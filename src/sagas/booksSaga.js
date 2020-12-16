import { LOAD_BOOKS } from "actions/types";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchBooks } from "Network";
import { getBooks } from "actions";

function* handleBooksLoad() {
  try {
    const books = yield call(fetchBooks);
    yield put(getBooks(books));
  } catch (error) {
    console.log(error);
  }
}

function* booksSaga() {
  //   yield takeEvery('actionsname',workersaga)
  yield takeEvery(LOAD_BOOKS, handleBooksLoad);
}

export default booksSaga;
