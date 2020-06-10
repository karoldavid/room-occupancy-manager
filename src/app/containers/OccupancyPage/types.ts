export enum RoomType {
  PREMIUM = 'premium',
  ECONOMY = 'economy',
}

export interface Revenue {
  free: number;
  usage: number;
  total: number;
  currency: string;
}

export type RevenueRoomType = {
  [key in RoomType]: Revenue;
};
