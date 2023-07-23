import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import React from 'react';

export const StyleDecorator = () => (Story) =>
  (
    <div className={`app`}>
      <Story />
    </div>
  );
