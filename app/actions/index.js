// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as contractorActions from './contractorActions';
import * as splashActions from './splashActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions,
    contractorActions,
    splashActions
);
