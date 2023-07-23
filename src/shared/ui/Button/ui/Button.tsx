import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<Props> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, {[cls[theme]]: true}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
