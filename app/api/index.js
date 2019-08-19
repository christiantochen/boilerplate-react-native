// General api to access data
import ApiConstants from './ApiConstants';

/**
 * Get query string
 *
 * @param   {*}   query   query object (any object that Object.entries() can handle)
 * @returns {string}      query string
 */
function querystring(query = {}) {
    // get array of key value pairs ([[k1, v1], [k2, v2]])
    const qs = Object.entries(query)
        // filter pairs with undefined value
        .filter(pair => pair[1] !== undefined)
        // encode keys and values, remove the value if it is null, but leave the key
        .map(pair => pair.filter(i => i !== null).map(encodeURIComponent).join('='))
        .join('&');

    return qs && '?' + qs;
}

export default function api(path, params, method, token) {
    let url = ApiConstants.BASE_URL + path;
    let options;
    
    options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: method
    };

    if (method === 'get') {
        url = `${url}${querystring(params)}`
    } else {
        options = { ...options, ...(params && { body: JSON.stringify(params) }) };
    }

    return fetch(url, options)
        .then(async resp => ({ status: resp.status, ok: resp.ok, data: await resp.json() }))
        .catch(error => error);
}
