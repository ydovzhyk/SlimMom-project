import { useTranslation } from 'react-i18next';
import Navigation from '../Navigation';
import LanguageSelect from 'components/Shared/LanguageSelect';

import s from './BottomPanel.module.scss';

const BottomPanel = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={s.bottomPanel}>
      <div className="container">
        <div className={s.bottomPanel__content}>
          <Navigation />
          <LanguageSelect changeLanguage={changeLanguage} />
        </div>
      </div>
    </div>
  );
};

export default BottomPanel;
