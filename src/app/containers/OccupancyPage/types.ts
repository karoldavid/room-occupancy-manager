export enum RoomType {
  PREMIUM = 'premium',
  ECONOMY = 'economy',
}

export interface AvailableRooms {
  [name: string]: number;
}

export interface AvailableRoomsFormValues {
  [name: string]: {
    value: number;
  };
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

export interface BookingState {
  availableRooms: AvailableRooms;
  guests: number[];
}

export type ContainerState = BookingState;