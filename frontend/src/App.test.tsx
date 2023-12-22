import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Split wine App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeVisible();
});
