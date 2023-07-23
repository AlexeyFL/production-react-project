import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import Button, { ThemeButton } from './Button';
import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'text',
  },
};

export const Clear: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlinedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'text',
    theme: ThemeButton.OUTLINE,
  },
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
