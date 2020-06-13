import * as selectors from '../selectors';
import { RootState } from 'types';
import { GuestsErrorType } from '../types';
import { initialState } from '../slice';
import data from '../mock/guests.json';

describe('OccupancyPage selectors', () => {
  let state: RootState;
  beforeEach(() => {
    state = {
      occupancy: {
        availableRooms: {
          premium: 0,
          economy: 0,
        },
        guests: [],
        loading: false,
        error: null,
      },
    };
  });

  describe('selectError', () => {
    it('should select error', () => {
      const error = GuestsErrorType.RESPONSE_ERROR;
      state = {
        occupancy: { ...initialState, error: error },
      };
      expect(selectors.selectError(state)).toEqual(error);
    });
  });

  describe('selectLoading', () => {
    it('should select loading', () => {
      const loading = true;
      state = {
        occupancy: { ...initialState, loading: loading },
      };
      expect(selectors.selectLoading(state)).toEqual(loading);
    });
  });

  describe('selectRevenueRoom', () => {
    it('should return object with correct properties', () => {
      const expectedProperties = [
        'premium.usage',
        'premium.total',
        'premium.currency',
        'economy.usage',
        'economy.total',
        'economy.currency',
      ];
      state = {
        occupancy: {
          ...initialState,
          availableRooms: {
            premium: 3,
            economy: 3,
          },
          guests: [...data],
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

      expectedProperties.forEach((name, index) => {
        expect(selectors.selectRevenueRoom(state)).toHaveProperty(name);
      });
    });
  });
});
