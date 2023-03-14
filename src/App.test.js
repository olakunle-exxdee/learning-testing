import React from 'react';

import { render, screen } from '@testing-library/react';
import ColorApp from './components/ColorApp';
import { replaceCamelWithSpaces } from './components/ColorApp';
import userEvent from '@testing-library/user-event';

//this does not test the state of the app just the looks
test('button has the correct initial color', () => {
  render(<ColorApp />);

  //find and element with a role of a button and the text of "Change to MidnightBlue "
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  //expect the background-color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ background: 'MediumVioletRed' });

  //click button
  userEvent.click(colorButton);

  //expect the background of MidnightBlue
  expect(colorButton).toHaveStyle({ background: 'MidnightBlue' });

  expect(colorButton.textContent).toBe('Change to MediumVioletRed');
});

// todo : the initial state of the check box  and button

test('initial condition', () => {
  render(<ColorApp />);

  // check the button if it starts enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });
  expect(colorButton).toBeEnabled();

  // check the checkbox  starts unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('change checkbox state', () => {
  render(<ColorApp />);
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  userEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  userEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});
test('change the button color to gray when when checkbox is disabled', () => {
  render(<ColorApp />);
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  userEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ background: 'gray' });

  userEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ background: 'MediumVioletRed' });
});
test('change the button color to MidnightBlue', () => {
  render(<ColorApp />);
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  userEvent.click(colorButton);

  userEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ background: 'gray' });

  userEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ background: 'MidnightBlue' });
});

describe('spaces before camel-case capital letter', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
