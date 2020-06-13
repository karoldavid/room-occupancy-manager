import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AvailableRoomsForm } from '../AvailableRoomsForm';
import { AvailableRooms } from '../types';

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

  it('calls handleSubmit with the correct values', async () => {
    const handleSubmit = jest.fn();

    const props = {
      onFinish: handleSubmit,
      title: 'Test',
    };
    const { getByPlaceholderText, getByTestId } = renderAvailableRoomsForm(
      props,
    );

    fireEvent.change(getByTestId('premium'), {
      target: { value: 3 },
    });

    fireEvent.change(getByTestId('economy'), {
      target: { value: 7 },
    });

    fireEvent.submit(getByTestId('submit'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        premium: 3,
        economy: 7,
      });
    });
  });
});
