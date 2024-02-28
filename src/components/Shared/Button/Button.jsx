import { useTranslation } from 'react-i18next';
import s from './Button.module.scss';

const Button = ({
  text = '',
  type = 'submit',
  btnClass = 'btnLight',
  handleClick,
}) => {
  const { t } = useTranslation();

  return (
    <button className={s[btnClass]} onClick={handleClick} type={type}>
      {t(text)}
    </button>
  );
};

export default Button;
