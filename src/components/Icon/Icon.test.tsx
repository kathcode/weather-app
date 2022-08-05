import React from 'react';

import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

test('should apply the bgColor sended', () => {
  const bgColor = '#cecece';
  render(
    <Icon bgColor={bgColor}>
      <h1>Text</h1>
    </Icon>
  );
  const sectionElement = screen.getByTestId('container');
  expect(sectionElement).toHaveStyle(`background-color: ${bgColor}`);
});
