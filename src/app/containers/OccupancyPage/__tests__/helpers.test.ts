import { revenueRoomReducer, getDetailsDataByCategory } from '../helpers';
import {
  BookingState,
  RevenueRoomType,
  RoomType,
  AvailableRooms,
} from '../types';
import { initialState } from '../slice';
import data from '../mock/guests.json';

const testData: [AvailableRooms, RevenueRoomType][] = [
  [
    { premium: 3, economy: 3 },
    {
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
    },
  ],
  [
    { premium: 7, economy: 5 },
    {
      premium: {
        usage: 6,
        total: 1054,
        currency: 'EURO',
      },
      economy: {
        usage: 4,
        total: 189,
        currency: 'EURO',
      },
    },
  ],
  [
    { premium: 2, economy: 7 },
    {
      premium: {
        usage: 2,
        total: 583,
        currency: 'EURO',
      },
      economy: {
        usage: 4,
        total: 189,
        currency: 'EURO',
      },
    },
  ],
  [
    { premium: 7, economy: 1 },
    {
      premium: {
        usage: 7,
        total: 1153,
        currency: 'EURO',
      },
      economy: {
        usage: 1,
        total: 45,
        currency: 'EURO',
      },
    },
  ],
];

describe('helpers', () => {
  describe('revenueRoomReducer', () => {
    let occupancyState: BookingState;
    let initialRevenueRoom: RevenueRoomType;

    beforeEach(() => {
      occupancyState = {
        ...initialState,
        guests: data,
      };
      initialRevenueRoom = {
        [RoomType.PREMIUM]: { usage: 0, total: 0, currency: 'EURO' },
        [RoomType.ECONOMY]: { usage: 0, total: 0, currency: 'EURO' },
      };
    });

    it.each(testData)(
      'it should calculate the correct revenue and room occupancy',
      (free, expected) => {
        const result = revenueRoomReducer(
          {
            ...occupancyState,
            availableRooms: {
              [RoomType.PREMIUM]: free[RoomType.PREMIUM],
              [RoomType.ECONOMY]: free[RoomType.ECONOMY],
            },
          },
          initialRevenueRoom,
        );

        expect(result).toEqual(expected);
      },
    );
  });
});
