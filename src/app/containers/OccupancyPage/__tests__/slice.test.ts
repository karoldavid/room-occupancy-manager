import * as slice from '../slice';
import { ContainerState } from '../types';

describe('occupancy slice', () => {
  let state: ContainerState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle updateAvailableRoomsForm', () => {
    const payload = {
      premium: 5,
      economy: 3,
    };

    expect(
      slice.reducer(state, slice.actions.updateAvailableRoomsForm(payload)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      availableRooms: payload,
    });
  });
});
