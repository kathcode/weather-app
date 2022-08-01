import React from 'react';
import { screen, render } from '@testing-library/react';
import Widget from './Widget';

test('should render a title', () => {
  const widgetType = 'Weather';
  render(<Widget widgetType={widgetType} />);
  const title = screen.getByTestId('widget-type');

  expect(title.textContent).toBe('Weather');
});
