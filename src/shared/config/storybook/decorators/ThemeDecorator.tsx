import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
