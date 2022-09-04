import React from 'react';
import { screen } from '@testing-library/react'

import Homepage from '../pages/Homepage';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';

describe('2) Testing Homepage', () => {
  describe('Testing create post modal', () => {
    it('Testing inputs', () => {
      renderWithRouterAndRedux(<Homepage />);
      const titleInput = screen.getByTestId('title-box');
      const contentInput = screen.getByTestId('content-box');
  
      expect(titleInput).toBeDefined();
      expect(contentInput).toBeDefined();
    });
    it('Testing button', () => {
      renderWithRouterAndRedux(<Homepage />);
      const createButton = screen.getByRole('button', { name: /create/i });

      expect(createButton).toBeDefined();
    });
  });
});