import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo-dental.svg';

import s from './Logo.module.scss';

const Logo = ({ width, height }) => {
  return (
    <>
      <div className={s.logo}>
        <Link to="/" className={s.logo__link}>
          <img src={logo} alt="logo" style={{ width: width, height: height }} />
        </Link>
      </div>
    </>
  );
};

export default Logo;
