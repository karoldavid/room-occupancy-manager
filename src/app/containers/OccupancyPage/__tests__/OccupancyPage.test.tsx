import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { OccupancyPage } from '../index';

const renderer = createRenderer();

describe('<OccupancyPage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<OccupancyPage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
