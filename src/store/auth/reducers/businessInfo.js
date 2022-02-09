import * as types from '../types';

export const initialState = {
  email: undefined,
  businessInfo: undefined,
  isFetching: false,
};

export const reducer = {
  [types.AUTH_GET_BUSINESS_INFO](state, action) {
    return {
      ...state,
      email: action.email,
      isFetching: true
    };
  },
  [types.AUTH_GET_BUSINESS_INFO_SUCCESS](state, action) {
    return {
      ...state,
      businessInfo: action.data,
      isFetching: false
    };
  },
};
