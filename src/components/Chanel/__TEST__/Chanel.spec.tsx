import { render, screen } from '@testing-library/react';
import Chanel from '..';

it('length of chanels should match', () => {
  // todo: Arange
  render(<Chanel />);

  // todo: Act
  const actualResult = screen.getAllByTestId('chanel-list').length;
  const expectedResult = 3;

  expect(actualResult).toBe(expectedResult);
});

it('length of user in chanel should match', () => {
  // todo: Arange
  render(<Chanel />);

  // todo: Act
  const actualResult = screen.getAllByTestId('user-in-chanel').length;
  const expectedResult = 5;

  // todo: Assert
  expect(actualResult).toBe(expectedResult);
});
