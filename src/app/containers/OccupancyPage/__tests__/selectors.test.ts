import * as selectors from '../selectors';
import { RootState } from 'types';
import { GuestsErrorType } from '../types';
import { initialState } from '../slice';

describe('GithubRepoForm selectors', () => {
  let state: RootState;
  beforeEach(() => {
    state = {
      occupancy: {
        availableRooms: {
          premium: 0,
          economy: 0,
        },
        guests: [],
        loading: false,
        error: null,
      },
    };
  });

  it('should select error', () => {
    const error = GuestsErrorType.RESPONSE_ERROR;
    state = {
      occupancy: { ...initialState, error: error },
    };
    expect(selectors.selectError(state)).toEqual(error);
  });

  it('should select loading', () => {
    const loading = true;
    state = {
      occupancy: { ...initialState, loading: loading },
    };
    expect(selectors.selectLoading(state)).toEqual(loading);
  });
});
