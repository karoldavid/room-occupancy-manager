import { createSelector } from '@reduxjs/toolkit';
import { revenueRoomReducer, initialRevenueRoomState } from './helpers';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.occupancy || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  occupancyState => occupancyState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  occupancyState => occupancyState.error,
);

export const selectAvailableRooms = createSelector(
  [selectDomain],
  occupancyState => occupancyState.availableRooms,
);

export const selectRevenueRoom = createSelector(
  [selectDomain],
  occupancyState => revenueRoomReducer(occupancyState, initialRevenueRoomState),
);
