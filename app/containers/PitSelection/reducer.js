/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/fixtures/actionTypes';

const initialState = {
    selectedPit: undefined
};

export const pitSelectionReducer = createReducer(initialState, {
    [types.PIT_SELECTED](state, action) {
        return {
            ...state,
            selectedPit: action.pit
        };
    },
    [types.PIT_CLEARED](state, action) {
        return {
            ...state,
            selectedPit: undefined
        };
    }
});
