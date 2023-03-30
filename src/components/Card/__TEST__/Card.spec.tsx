import { render, screen } from '@testing-library/react';
import Card from '..';

it('should render card component correctly', () => {
  // todo: Arange
  render(<Card />);

  // todo: Act

  //   todo: Assert
  expect(screen.getByText(/Card component/i)).toBeInTheDocument();
  expect(screen.getByText(/just-chillin/i)).toBeInTheDocument();
});

it('should render image correctly', () => {
  // todo: Arange
  render(<Card />);

  // todo: Act
  const testingPosterImg = screen.getByAltText(/testing.*? application/i);

  //   todo: Assert
  expect(testingPosterImg).toBeInTheDocument();
});
