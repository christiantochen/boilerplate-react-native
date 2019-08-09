import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function login(username, password) {
    return Api(
        ApiConstants.LOGIN,
        { username, password },
        'post',
        null
    );
}
