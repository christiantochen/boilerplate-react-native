import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getAllContractor(params, token) {
    return Api(
        ApiConstants.GET_CONTRACTORS,
        params,
        'get',
        token
    );
}
