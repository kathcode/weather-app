import React from 'react';

import { render, screen } from '@testing-library/react';
import CardContainer from './CardContainer';

test('render the color sended by props', () => {
  const bgColor = '#eeeeee';
  render(<CardContainer bgColor={bgColor}>Title</CardContainer>);

  const card = screen.getByTestId('card-container');

  expect(card).toHaveStyle(`background-color: ${bgColor}`);
});
