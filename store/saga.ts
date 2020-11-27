import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  INVITE_ENDPOINT,
  MODAL_ACTION_TYPES,
  REQUEST_INVITE_ACTION_TYPES,
} from '../constants'
import {
  requestSuccess,
  requestFail,
  requestReset,
} from './requestInvite/action'

function* requestInviteSaga(payload) {
  const { data } = payload || {}
  try {
    const res = yield fetch(INVITE_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    const { status } = res || {}
    if (status === 200) {
      yield put(requestSuccess())
    } else {
      const resJson = yield res.json()
      const { errorMessage } = resJson || {}
      yield put(requestFail(new Error(errorMessage)))
    }
  } catch (err) {
    yield put(requestFail(err))
  }
}

function* closeModalSaga() {
  yield put(requestReset())
}

function* rootSaga() {
  yield takeLatest(REQUEST_INVITE_ACTION_TYPES.REQUEST, requestInviteSaga)
  yield takeEvery(MODAL_ACTION_TYPES.CLOSE, closeModalSaga)
}

export default rootSaga
