import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function logout(token) {
    return Api(
        ApiConstants.LOGOUT,
        null,
        'get',
        token
    );
}
