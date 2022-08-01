import React from 'react'
import { render, screen } from '@testing-library/react'
import { BackgroundContainer } from './BackgroundContainer'

test('should apply the bgColor sended', () => {
  const bgColor = '#cecece'
  render(<BackgroundContainer bgColor={bgColor} bgColorDefault='#cccccc'>
    <h1>Text</h1>
  </BackgroundContainer>)
  const sectionElement = screen.getByText(/Text/);
  expect(sectionElement).toHaveStyle(`background-color: ${bgColor}`)
})