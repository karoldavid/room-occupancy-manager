import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, AvailableRooms, RoomType } from './types';

export const initialState: ContainerState = {
  availableRooms: { [RoomType.PREMIUM]: 0, [RoomType.ECONOMY]: 0 },
  guests: [],
};

const occupancySlice = createSlice({
  name: 'occupancy',
  initialState,
  reducers: {
    updateAvailableRoomsForm(state, action: PayloadAction<AvailableRooms>) {
      state.availableRooms = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = occupancySlice;
