import { revenueRoomReducer, initialRevenueRoomState } from '../helpers';
import { BookingState, RevenueRoomType, RoomType } from '../types';
import { initialState } from '../slice';
import data from '../mock/guests.json';

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

  it('should calculate the correct revenue and room occupancy 1', () => {
    const free = { premium: 3, economy: 3 };

    const newOccupancy = {
      ...occupancyState,
      availableRooms: {
        premium: free.premium,
        economy: free.economy,
      },
    };

    const expectedResult = {
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

    occupancyState.availableRooms.premium = free.premium;
    occupancyState.availableRooms.economy = free.economy;

    const result = revenueRoomReducer(newOccupancy, initialRevenueRoom);

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the correct revenue and room occupancy 2', () => {
    const free = { premium: 7, economy: 5 };

    const newOccupancy = {
      ...occupancyState,
      availableRooms: {
        premium: free.premium,
        economy: free.economy,
      },
    };

    const expectedResult = {
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
    };

    const result = revenueRoomReducer(newOccupancy, {
      ...initialRevenueRoom,
    });
    expect(result).toEqual(expectedResult);
  });

  it('should calculate the correct revenue and room occupancy 3', () => {
    const free = { premium: 2, economy: 7 };

    const newOccupancy = {
      ...occupancyState,
      availableRooms: {
        premium: free.premium,
        economy: free.economy,
      },
    };

    const expectedResult = {
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
    };

    const result = revenueRoomReducer(newOccupancy, {
      ...initialRevenueRoomState,
    });

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the correct revenue and room occupancy 4', () => {
    const free = { premium: 7, economy: 1 };

    const newOccupancy = {
      ...occupancyState,
      availableRooms: {
        premium: free.premium,
        economy: free.economy,
      },
    };

    const expectedResult = {
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
    };

    const result = revenueRoomReducer(newOccupancy, {
      ...initialRevenueRoom,
    });

    expect(result).toEqual(expectedResult);
  });
});
