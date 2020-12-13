const { SET_BOOKS, GET_BOOK } = require("actions/types");

const InitialState = {
  books: [],
};
const books = (state = InitialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload.items };

    default:
      return state;
  }
};

export default books;
