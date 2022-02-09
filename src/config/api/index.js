import Config from 'react-native-config';
import execute from './execute';

export function Api(path, params, method, token) {
  return execute(`${Config.GOAPP_API_URL}${path}`, params, method, token);
}

export function AuthApi(path, params, method, token) {
  return execute(`${Config.GOAPP_AUTH_API_URL}${path}`, params, method, token);
}
