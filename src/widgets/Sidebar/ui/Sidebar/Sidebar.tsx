import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { BugButton } from 'app/providers/errorBoundary';
import { Button } from 'shared/ui/Button';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </button>
      <LangSwitcher />
    </div>
  );
};

export default Sidebar;
