import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (Story) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
