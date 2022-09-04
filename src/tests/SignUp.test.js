import React from 'react';
import { screen } from '@testing-library/react'

import Signup from '../pages/Signup';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';

// Tests does not working yet, I had a problem with react-redux context value.
// I did not figure out yet how to render with Redux as well render with 

describe('01) Testing SignUp page', () => {
  it('The welcome message exist', () => {
    renderWithRouterAndRedux(<Signup />);
    const welcomeMsg = screen.getByText(/welcome/i);
    expect(welcomeMsg).toBeDefined();
  });
  it('The input box exist', () => {
    renderWithRouterAndRedux(<Signup />);
    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeDefined();
  });
});