import {
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_FAILED,
  TOKEN_REFRESH_SUCCEED
} from 'app/fixtures/actionTypes';

export const initialState = {
  token: undefined
};

export const reducer = {
  [TOKEN_REFRESH_REQUEST](state) {
    return {
      ...state
    };
  },
  [TOKEN_REFRESH_SUCCEED](state, action) {
    return {
      ...state,
      ...action.response
    };
  },
  [TOKEN_REFRESH_FAILED](state) {
    return {
      ...state,
      token: undefined,
      isLoggedIn: false
    };
  }
};
