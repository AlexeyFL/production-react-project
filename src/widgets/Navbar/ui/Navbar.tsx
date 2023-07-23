import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import Applink, { ApplinkThemes } from 'shared/ui/Applink/Applink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher className=''/>
      <div className={cls.links}>
        <Applink theme={ApplinkThemes.PRIMARY} className={cls.link} to={'/'}>
          Main
        </Applink>
        <Applink
          theme={ApplinkThemes.PRIMARY}
          className={cls.link}
          to={'/about'}
        >
          About
        </Applink>
      </div>
    </div>
  );
};

export default Navbar;
