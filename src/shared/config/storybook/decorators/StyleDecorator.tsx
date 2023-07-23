import 'app/styles/index.scss';

import React from 'react';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = () => (Story: StoryFn) =>
  (
    <div className={`app`}>
      <Story />
    </div>
  );
