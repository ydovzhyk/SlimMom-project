import { useTranslation } from 'react-i18next';
import Logo from 'components/Shared/Logo';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
import Button from 'components/Shared/Button';
import s from './Header.module.scss';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className={s.header}>
        <TopPanel />
        <div className="container">
          <div className={s.header__content}>
            <Logo width={150} height={90} />
            <div className={s.header__part}>
              <div className={s.header__partClinic}>
                <span className={s.header__title}>{t('Dental Clinic')}</span>
                <span className={s.topPanel__text}>
                  {t('Mon-Sun: 9:00 — 21:00')}
                </span>
              </div>
              <a className={s.header__link} href="tel:+34614258852">
                <span className={s.header__title}>+34 614 258 852</span>
              </a>
            </div>
            <Button text="Make an appoitment" btnClass="btnLight" />
          </div>
        </div>
        <BottomPanel />
      </header>
    </>
  );
};

export default Header;
