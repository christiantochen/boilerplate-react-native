/**
 *  Redux saga class init
 */
import { all, takeLatest } from 'redux-saga/effects'
import {
  INITIALIZE_CHECK_AND_NAVIGATE,
  LOGIN_REQUEST,
  GET_CONTRACTORS_REQUEST,
  PIT_SELECTED,
  SESSION_CLEAR_REQUEST,
  GET_CHECKLIST_REQUEST,
} from '../fixtures/actionTypes'
import sessionInitCheckAndNavigate from './sessionInitCheckAndNavigate'
import loginRequest from './loginRequest'
import sessionClearRequest from './sessionClearRequest'
import getContractorRequest from './getContractorsRequest'
import getChecklistRequest from './getChecklistRequest'
import pitSelected from './pitSelected'

export default function* watch() {
  yield all([takeLatest(LOGIN_REQUEST, loginRequest)])
  yield all([takeLatest(SESSION_CLEAR_REQUEST, sessionClearRequest)])
  yield all([takeLatest(INITIALIZE_CHECK_AND_NAVIGATE, sessionInitCheckAndNavigate)])
  yield all([takeLatest(GET_CONTRACTORS_REQUEST, getContractorRequest)])
  yield all([takeLatest(GET_CHECKLIST_REQUEST, getChecklistRequest)])
  yield all([takeLatest(PIT_SELECTED, pitSelected)])
}
