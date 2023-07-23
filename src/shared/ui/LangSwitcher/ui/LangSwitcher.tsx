import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';

interface Props {
  className?: string;
}

const LangSwitcher: FC<Props> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div className={classNames(cls['lang - switcher'], {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggleLang}>
        {t('Перевод')}
      </Button>
      <div>{t('Тест')}</div>
    </div>
  );
};

export default LangSwitcher;
