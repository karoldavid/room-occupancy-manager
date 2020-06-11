import { RoomType, RevenueRoomType, BookingState } from './types';

const MAX_AMOUNT_EURO_PREMIUM = 100;

export const initialRevenueRoom: RevenueRoomType = {
  [RoomType.PREMIUM]: { usage: 0, total: 0, currency: 'EURO' },
  [RoomType.ECONOMY]: { usage: 0, total: 0, currency: 'EURO' },
};

const mookRevenueRoomResult: RevenueRoomType = {
  premium: {
    usage: 3,
    total: 738,
    currency: 'EURO',
  },
  economy: {
    usage: 3,
    total: 167,
    currency: 'EURO',
  },
};

export const revenueRoomReducer = (
  occupancyState: BookingState,
  initialRoomOccupancyState: RevenueRoomType,
): RevenueRoomType => mookRevenueRoomResult;
