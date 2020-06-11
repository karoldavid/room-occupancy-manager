import { createSelector } from '@reduxjs/toolkit';

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
