import React from 'react';
import { screen, render } from '@testing-library/react';
import Widget from './Widget';

test('should render a title', () => {
  const widgetTitle = 'Weather';
  const temp = 2;
  render(<Widget value={temp} title={widgetTitle} />);
  const title = screen.getByTestId('widget-type');

  expect(title.textContent).toBe('Weather');
});

test('should render a subtitle is sended by props', () => {
  const subtitle = 'Widget subtitle';
  const temp = 2;
  render(<Widget value={temp} title="Weather" subtitle={subtitle} />);
  const widgetElement = screen.getByTestId('subtitle');

  expect(widgetElement.textContent).toBe('Widget subtitle');
});
