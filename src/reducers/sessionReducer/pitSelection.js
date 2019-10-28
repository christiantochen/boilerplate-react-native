import { PIT_SELECTED } from 'app/fixtures/actionTypes';

export const initialState = {
  selectedPit: undefined,
  selectedContractor: undefined
};

export const reducer = {
  [PIT_SELECTED](state, action) {
    const { selectedPit, selectedContractor } = action;

    return {
      ...state,
      selectedPit,
      selectedContractor
    };
  }
};
