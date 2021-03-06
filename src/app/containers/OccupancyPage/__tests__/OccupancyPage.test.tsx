import React from 'react';
import { Store } from '@reduxjs/toolkit';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import { actions, initialState } from '../slice';
import { OccupancyPage } from '../index';

const renderOccupancyPage = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <OccupancyPage />
      </HelmetProvider>
    </Provider>,
  );

describe('<OccupancyPage />', () => {
  let store: ReturnType<typeof configureAppStore>;
  let component: ReturnType<typeof renderOccupancyPage>;

  beforeEach(() => {
    store = configureAppStore();
    component = renderOccupancyPage(store);
    expect(store.getState().occupancy).toEqual(initialState);
  });
  afterEach(() => {
    component.unmount();
  });

  it('should render and match the snapshot', () => {
    const component = renderOccupancyPage(store);
    expect(component).toMatchSnapshot();
  });

  it('should display loading indicator when state is loading', () => {
    store.dispatch(actions.loadGuests());
    expect(
      component.container.querySelector('.ant-spin-spinning'),
    ).toBeInTheDocument();
  });
});
