import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import descriptions from '../../data/description-trust-us.json';
import image from '../../images/trust-us/main.jpg';

import s from './TrustUs.module.scss';

function ListItem({ text, description }) {
  const [isClicked, setIsClicked] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <li className={s.list} onClick={handleClick}>
      {t(text)}
      {isClicked && <p className={`${s.text} ${s.fadeIn}`}>{t(description)}</p>}
    </li>
  );
}

const TrusrUs = () => {
  const { t } = useTranslation();

  return (
    <div className={s.trust}>
      <div className="container">
        <div className={s.trust__content}>
          <div className={s.trust__titleContent}>
            <div className={s.trust__titleImg}></div>
            <div className={s.trust__titleTextContent}>
              <h2 className={s.trust__title}>
                <span className={s.trust__titleOther}>
                  {t('Why you should ')}
                </span>
                {t('trust us')}
              </h2>
              <div className={s.trust__textBox}>
                <p className={s.trust__text}>
                  {t('Healthy Smile: A new era in dentistry, trust us')}
                </p>
              </div>
            </div>
          </div>
          <div className={s.trust__main}>
            <ul className={s.trust__mainOurtrust}>
              {Object.entries(descriptions).map(
                ([text, description], index) => (
                  <ListItem key={index} text={text} description={description} />
                )
              )}
            </ul>
            <div className={s.trust__mainPhoto}>
              <div className={s.trust__photoBorder}>
                <img
                  src={image}
                  alt="Doctor and patient"
                  height="450"
                  width="720"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrusrUs;
