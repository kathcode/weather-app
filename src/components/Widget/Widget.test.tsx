import React from 'react';
import { screen, render } from '@testing-library/react';
import Widget from './Widget';

test('should render a title', () => {
  const widgetTitle = 'Weather';
  render(<Widget title={widgetTitle} />);
  const title = screen.getByTestId('widget-type');

  expect(title.textContent).toBe('Weather');
});

test('should render a subtitle is sended by props', () => {
  const subtitle = "Widget subtitle";

  render(<Widget title="Weather" subtitle={subtitle} />)
  const widgetElement = screen.getByTestId('subtitle')

  expect(widgetElement.textContent).toBe('Widget subtitle')
})