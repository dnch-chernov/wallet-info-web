import { render, screen } from '@testing-library/react';
import App from './App';

test('checks start page is rendered', () => {
  render(<App />);
  // screen.debug();
  expect(screen.getByTestId('header-wallet-info')).toBeInTheDocument();
});
