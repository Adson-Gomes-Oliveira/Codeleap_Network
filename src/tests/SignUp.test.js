import React from 'react';
import { screen } from '@testing-library/react'

import Signup from '../pages/Signup';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';

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