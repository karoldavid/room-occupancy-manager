import { revenueRoomReducer, initialRevenueRoom } from '../helpers';
import { BookingState, RevenueRoomType } from '../types';
import { initialState } from '../slice';
import data from '../mock/guests.json';

describe('revenueRoomReducer', () => {
  let occupancyState: BookingState;
  let initialRoomOccupancyState: RevenueRoomType;

  beforeEach(() => {
    occupancyState = {
      ...initialState,
    };
  });

  it('should calculate the correct revenue and room occupancy 1', () => {
    const free = { premium: 3, economy: 3 };
    const result = {
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

    // initialRoomOccupancyState = {
    //   premium: { usage: 0, total: 0, currency: 'EURO' },
    //   economy: { usage: 0, total: 0, currency: 'EURO' },
    // };

    occupancyState.availableRooms.premium = free.premium;
    occupancyState.availableRooms.economy = free.economy;
    expect(
      revenueRoomReducer(occupancyState, initialRoomOccupancyState),
    ).toEqual(result);
  });
  it('should calculate the correct revenue and room occupancy 2', () => {
    const free = { premium: 7, economy: 5 };

    const result = {
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

    occupancyState.guests = data;
    occupancyState.availableRooms.premium = free.premium;
    occupancyState.availableRooms.economy = free.economy;
    expect(
      revenueRoomReducer(occupancyState, initialRoomOccupancyState),
    ).toEqual(result);
  });

  it('should calculate the correct revenue and room occupancy 3', () => {
    const free = { premium: 2, economy: 7 };
    const result = {
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
    occupancyState.availableRooms.premium = free.premium;
    occupancyState.availableRooms.economy = free.economy;
    expect(
      revenueRoomReducer(occupancyState, initialRoomOccupancyState),
    ).toEqual(result);
  });

  it('should calculate the correct revenue and room occupancy 4', () => {
    const free = { premium: 7, economy: 1 };

    const result = {
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

    occupancyState.availableRooms.premium = free.premium;
    occupancyState.availableRooms.economy = free.economy;
    expect(
      revenueRoomReducer(occupancyState, initialRoomOccupancyState),
    ).toEqual(result);
  });
});
