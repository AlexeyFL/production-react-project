import React, { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from './PageLoader.module.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';

interface Props {
  className?: string;
}

const PageLoader: FC<Props> = ({ className }) => {
  return (
    <div>
      PageLoader...
    </div>
  );
};

export default PageLoader;
