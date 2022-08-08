import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render a weather widget', async () => {
  const fakeResponse = {
    locations: {
      Toronto: {
        name: 'Toronto',
        currentConditions: {
          temp: 42,
          visibility: 20,
          humidity: 50,
        },
      },
    },
  };

  const mockRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
  const mockedFetch = jest.fn().mockResolvedValueOnce(mockRes as any);
  (global as any).fetch = mockedFetch;

  render(<App />);
  await act(async () => {
    await waitFor(() => {
      expect(mockedFetch).toHaveBeenCalledTimes(1);
    });
  });
});
