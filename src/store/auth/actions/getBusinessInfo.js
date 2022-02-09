import * as types from '../types';

export const getBusinessInfo = email => ({
  type: types.AUTH_GET_BUSINESS_INFO,
  email,
});

export const getBusinessInfoSuccess = data => ({
  type: types.AUTH_GET_BUSINESS_INFO_SUCCESS,
  data,
});

