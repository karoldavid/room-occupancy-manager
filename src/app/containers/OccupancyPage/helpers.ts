import sortBy from 'lodash/sortBy';
import {
  AvailableRooms,
  RoomType,
  RevenueRoomType,
  BookingState,
} from './types';

const MAX_AMOUNT_EURO_PREMIUM = 100;

export const initialRevenueRoomState: RevenueRoomType = {
  [RoomType.PREMIUM]: { usage: 0, total: 0, currency: 'EURO' },
  [RoomType.ECONOMY]: { usage: 0, total: 0, currency: 'EURO' },
};

export const revenueRoomReducer = (
  occupancyState: BookingState,
  revenueRoomState: RevenueRoomType,
): RevenueRoomType => {
  return sortBy(occupancyState.guests)
    .reverse()
    .reduce(
      (prev: RevenueRoomType, curr: number, index: number): RevenueRoomType => {
        const newOccupation = { ...prev };

        if (
          (curr >= MAX_AMOUNT_EURO_PREMIUM &&
            occupancyState.availableRooms.premium >
              newOccupation.premium.usage) ||
          (curr < MAX_AMOUNT_EURO_PREMIUM &&
            occupancyState.availableRooms.premium >
              newOccupation.premium.usage &&
            occupancyState.availableRooms.economy <
              occupancyState.guests.length - index + 1)
        ) {
          newOccupation.premium.usage += 1;
          newOccupation.premium.total += curr;
        } else if (
          curr < MAX_AMOUNT_EURO_PREMIUM &&
          occupancyState.availableRooms.economy > newOccupation.economy.usage
        ) {
          newOccupation.economy.usage += 1;
          newOccupation.economy.total += curr;
        }

        return {
          ...newOccupation,
        };
      },
      revenueRoomState,
    );
};

export const getDetailsDataByCategory = (category: RoomType) => (
  revenueRoom: RevenueRoomType,
  availableRooms: AvailableRooms,
) => ({
  ...revenueRoom[category],
  free: availableRooms[category],
});
