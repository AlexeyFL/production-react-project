import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';
import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = () => (Story: StoryFn) =>
  (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
