import { fireEvent, render, screen } from '@testing-library/react';

import Button from '..';

it('should render button correctly', () => {
  // todo: Arange
  render(<Button />);

  const button = screen.getByRole('button', { name: 'Button' });

  // todo: Act

  // todo: Assert
  expect(button).toBeInTheDocument();
});

it('should show text clicked after clicked button', async () => {
  // todo: Arange
  render(<Button />);

  const button = screen.getByRole('button', { name: 'Button' });

  // todo: Act
  fireEvent.click(button);

  //   todo: Assert
  expect(screen.getByText(/clicked/i)).toBeInTheDocument();
});
