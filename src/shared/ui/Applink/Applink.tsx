import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Applink.module.scss';

export enum ApplinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props extends LinkProps {
  className?: string;
  theme?: ApplinkThemes;
}

const Applink: FC<Props> = (props) => {
  const {
    to,
    className,
    children,
    theme = ApplinkThemes.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default Applink;
