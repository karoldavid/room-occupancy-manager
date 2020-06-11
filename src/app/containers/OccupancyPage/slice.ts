import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  AvailableRooms,
  RoomType,
  GuestsErrorType,
} from './types';

export const initialState: ContainerState = {
  availableRooms: { [RoomType.PREMIUM]: 0, [RoomType.ECONOMY]: 0 },
  guests: [],
  loading: false,
  error: null,
};

const occupancySlice = createSlice({
  name: 'occupancy',
  initialState,
  reducers: {
    updateAvailableRoomsForm(state, action: PayloadAction<AvailableRooms>) {
      state.availableRooms = action.payload;
    },
    loadGuests(state) {
      state.guests = [];
      state.loading = true;
      state.error = null;
    },
    guestsLoaded(state, action: PayloadAction<number[]>) {
      state.guests = action.payload;
      state.loading = false;
      state.error = null;
    },
    guestsError(state, action: PayloadAction<GuestsErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = occupancySlice;
