import React from 'react';
import { render, screen } from '@testing-library/react';
import { BackgroundContainer } from './BackgroundContainer';

test('should apply the bgColor sended', () => {
  const bgColor = '#cecece';
  render(
    <BackgroundContainer
      data-testid="container"
      bgColor={bgColor}
      bgColorDefault={bgColor}
    >
      <h1>Text</h1>
    </BackgroundContainer>
  );
  const sectionElement = screen.getByTestId('container');
  expect(sectionElement).toHaveStyle(`background-color: ${bgColor}`);
});

test('should apply the default bgColor when there is no bgColor in props', () => {
  const bgColorDefault = '#cecece';
  render(
    <BackgroundContainer
      data-testid="container"
      bgColorDefault={bgColorDefault}
    >
      <h1>Text</h1>
    </BackgroundContainer>
  );
  const sectionElement = screen.getByTestId('container');
  expect(sectionElement).toHaveStyle(`background-color: ${bgColorDefault}`);
});
