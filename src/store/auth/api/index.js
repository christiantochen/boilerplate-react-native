import { AuthApi } from 'app/config/api';
import * as Endpoints from './endpoints';

export const getBusinessInfo = email =>
  AuthApi(`${Endpoints.AUTH_API_BUSINESS_INFO}`, { email }, 'post');
