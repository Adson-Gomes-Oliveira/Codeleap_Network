import React from 'react';
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event';

import SignUp from '../pages/SignUp';
import renderWithRouter from '../helpers/renderWithRouter';

// Tests does not working yet, I had a problem with react-redux context value.
// I did not figure out yet how to render with Redux as well render with Router.

describe('01) Testing SignUp page', () => {
  it('The welcome message exist', () => {
    render(<SignUp />);
    const welcomeMsg = screen.getByText(/welcome/i);
    expect(welcomeMsg).toBeDefined();
  });
  it('The input box exist', () => {
    render(<SignUp />);
    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeDefined();
  });
  it('The Button exist and the route change on click', () => {
    const { history } = renderWithRouter(<SignUp />);
    const buttonEnter = screen.getByRole('button');

    expect(buttonEnter).toBeDefined();
    userEvent.click(buttonEnter);

    const { pathname } = history.location;
    expect(pathname).toBe('/home');
  });
});