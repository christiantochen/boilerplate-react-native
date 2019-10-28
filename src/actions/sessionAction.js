/*
 * Reducer actions related with login
 */
import {
  INITIALIZE_CHECK_AND_NAVIGATE,
  PIT_SELECTED,
  SESSION_CLEAR_REQUEST,
  SESSION_CLEARED,
} from '../fixtures/actionTypes'

export default {
  initCheckAndNavigate() {
    return {
      type: INITIALIZE_CHECK_AND_NAVIGATE,
    }
  },
  selectPit(selectedPit, selectedContractor) {
    return {
      type: PIT_SELECTED,
      selectedContractor,
      selectedPit,
    }
  },
  sessionClearRequest() {
    return {
      type: SESSION_CLEAR_REQUEST,
    }
  },
  sessionCleared() {
    return {
      type: SESSION_CLEARED,
    }
  },
}
