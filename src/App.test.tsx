import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

it('should render default app correctly', () => {
  // todo: Arange
  render(<App />);

  // todo: Act
  const Container = screen.getByTestId('app-container');
  const buttonComponent = screen.getByTestId('button-component');

  // todo: Assert
  expect(Container).toContainElement(buttonComponent);
  expect(screen.getByText(/Button component/i)).toBeInTheDocument();
});

it('should render page correctly when select menu', () => {
  // todo: Arange
  render(<App />);

  // todo: Act
  const Container = screen.getByTestId('app-container');
  const chanelButton = screen.getByRole('button', {
    name: 'Chanel',
  });

  fireEvent.click(chanelButton);

  // todo: Assert
  expect(Container).toContainElement(screen.getByTestId('chanel-component'));
  expect(screen.getByText(/Chanel component/i)).toBeInTheDocument();
});
