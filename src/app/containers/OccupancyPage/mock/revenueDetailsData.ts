import { RoomType, RevenueRoomType } from '../types';

export const revenueDetailsData: RevenueRoomType = {
  [RoomType.PREMIUM]: { free: 0, usage: 0, total: 0, currency: 'EURO' },
  [RoomType.ECONOMY]: { free: 0, usage: 0, total: 0, currency: 'EURO' },
};
