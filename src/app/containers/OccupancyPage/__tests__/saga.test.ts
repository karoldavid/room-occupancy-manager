import { put, takeLatest } from 'redux-saga/effects';
import * as slice from '../slice';
import { occupancySaga, getGuests } from '../saga';
import { MockResponse } from '../mock/api';
import data from '../mock/guests.json';
import { GuestsErrorType } from '../types';

describe('getGuests Saga', () => {
  const response: MockResponse = {
    data,
  };
  let getGuestsIterator: ReturnType<typeof getGuests>;

  beforeEach(() => {
    getGuestsIterator = getGuests();

    const selectDescriptor = getGuestsIterator.next(response).value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the guestsLoaded action if it requests the data successfully', () => {
    const putDescriptor = getGuestsIterator.next(response).value;
    expect(putDescriptor).toEqual(
      put(slice.actions.guestsLoaded(response.data)),
    );
  });

  it('should dispatch the response error', () => {
    const requestDescriptor = getGuestsIterator.next(response).value;
    expect(requestDescriptor).toMatchSnapshot();

    const putDescriptor = getGuestsIterator.throw(new Error('some error'))
      .value;
    expect(putDescriptor).toEqual(
      put(slice.actions.guestsError(GuestsErrorType.RESPONSE_ERROR)),
    );
  });
});

describe('occupancySaga Saga', () => {
  const guestsIterator = occupancySaga();
  it('should start task to watch for loadGuests action', () => {
    const takeLatestDescriptor = guestsIterator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(slice.actions.loadGuests.type, getGuests),
    );
  });
});
