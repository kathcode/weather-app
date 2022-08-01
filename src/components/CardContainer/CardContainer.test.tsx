import React from 'react';

import { render, screen } from '@testing-library/react';
import CardContainer from './CardContainer';

test('render the color sended by props', () => {
  const bgColor = '#eeeeee';
  render(<CardContainer bgColor={bgColor}><h1>Title</h1></CardContainer>);

  const card = screen.getByTestId('card-container');

  expect(card).toHaveStyle(`background-color: ${bgColor}`);
});

test('should render the default color if no value is sended in bgColor prop', () => {
  render(<CardContainer><h1>Title</h1></CardContainer>);

  const card = screen.getByTestId('card-container');

  expect(card).toHaveStyle(`background-color: #cccccc`);
});


