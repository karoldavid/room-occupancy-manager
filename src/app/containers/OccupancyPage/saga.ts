import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { GuestsErrorType } from './types';
import { fetchGuests, MockResponse } from './mock/api';

export function* getGuests() {
  try {
    const response: MockResponse = yield call(fetchGuests);
    if (response && response.data) {
      yield put(actions.guestsLoaded(response.data));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    if (err.response?.status === 404) {
      yield put(actions.guestsError(GuestsErrorType.GUESTS_NOT_FOUND));
    } else {
      yield put(actions.guestsError(GuestsErrorType.RESPONSE_ERROR));
    }
  }
}

export function* occupancySaga() {
  yield takeLatest(actions.loadGuests.type, getGuests);
}
