export enum RoomType {
  PREMIUM = 'premium',
  ECONOMY = 'economy',
}

export enum GuestsErrorType {
  RESPONSE_ERROR = 1,
  GUESTS_NOT_FOUND = 2,
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

export interface OccupancyState extends BookingState {
  loading: boolean;
  error?: GuestsErrorType | null;
}

export type ContainerState = OccupancyState;
