import querystring from './querystring';
import store from 'app/store';
import Config from 'react-native-config';

export default function(url, params, method) {
  const { auth } = store.getState();

  let options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-Key': Config.GOAPP_API_KEY,
    },
    method: method,
  };

  if (auth?.userInfo?.business_uid) {
    options.headers['X-Service-Key'] = auth?.userInfo?.business_uid;
  }

  if (auth?.token) {
    options.headers.Authorization = `jwt ${auth?.token}`;
  }

  if (method === 'get') {
    url = `${url}${querystring(params)}`;
  } else {
    options = { ...options, ...(params && { body: JSON.stringify(params) }) };
  }
  
  return fetch(url, options)
    .then(async resp => {
      let data;

      try {
        data = await resp.json();
      } catch {}
      
      return { status: resp.status, ok: resp.ok, data };
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}
