import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from './Navigation.module.scss';

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <div className={s.navigation}>
      <NavLink
        className={getClassName({
          isActive: location.pathname === '/',
        })}
        to="/"
      >
        <span>{t('Home')}</span>
      </NavLink>

      <NavLink
        className={getClassName({
          isActive: location.pathname === '/services',
        })}
        to="/services"
      >
        <span>{t('Services and prices')}</span>
      </NavLink>
      <NavLink
        className={getClassName({
          isActive: location.pathname === '/about',
        })}
        to="/about"
      >
        <span>{t('About us')}</span>
      </NavLink>
      <NavLink
        className={getClassName({
          isActive: location.pathname === '/contacts',
        })}
        to="/contacts"
      >
        <span>{t('Contacts')}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
