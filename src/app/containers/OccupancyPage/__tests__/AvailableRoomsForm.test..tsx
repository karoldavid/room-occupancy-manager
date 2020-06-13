import React from 'react';
import { render } from '@testing-library/react';
import { AvailableRoomsForm } from '../AvailableRoomsForm';
import { AvailableRooms } from '../types';

// Mock method which is not implemented in JSDOM
// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const renderAvailableRoomsForm = (
  props: Parameters<typeof AvailableRoomsForm>[number],
) => render(<AvailableRoomsForm {...props} />);

describe('<AvailableRoomsForm />', () => {
  it('should match the snapshot', () => {
    const props = {
      onFinish: (values: AvailableRooms) => {
        // eslint-disable-next-line no-console
        console.log(values);
      },
      title: 'Test',
    };
    const availableRoomsForm = renderAvailableRoomsForm(props);
    expect(availableRoomsForm.container.firstChild).toMatchSnapshot();
  });

  it('should have the correct number of <input> elements', () => {
    const props = {
      onFinish: (values: AvailableRooms) => {
        // eslint-disable-next-line no-console
        console.log(values);
      },
      title: 'Test',
    };
    const availableRoomsForm = renderAvailableRoomsForm(props);
    expect(availableRoomsForm.container.querySelectorAll('input').length).toBe(
      2,
    );
  });
});
