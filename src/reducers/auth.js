import { SIGN_IN, SIGN_OUT } from "actions/types";

const InitialState = {
  isSignedIn: null,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
