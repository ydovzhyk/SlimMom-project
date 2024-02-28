import { useTranslation } from 'react-i18next';
import GoogleMap from 'components/Shared/GoogleMap';
import Button from 'components/Shared/Button';
import { SiGooglemaps } from 'react-icons/si';
import { MdLocalPhone } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';

import s from './OurContacts.module.scss';

const OurContacts = () => {
  const { t } = useTranslation();
  return (
    <div className={s.contacts}>
      <div className="container">
        <div className={s.contacts__content}>
          <div className={s.contacts__titleContent}>
            <div className={s.contacts__titleImg}></div>
            <div className={s.contacts__titleTextContent}>
              <h2 className={s.contacts__title}>
                <span className={s.contacts__titleOther}>
                  {t('Dental Clinic ')}
                </span>
                {t('Contacts01')}
              </h2>
              <div className={s.contacts__textBox}>
                <p className={s.contacts__text}>
                  {t("Modern dentistry in Platja d'Aro, Girona, Spain")}
                </p>
              </div>
            </div>
          </div>
          <div className={s.contacts__main}>
            <div className={s.contacts__contactsContent}>
              <div className={s.contacts__contactsMap}>
                <GoogleMap />
              </div>
              <div className={s.contacts__contactsData}>
                <div className={s.contacts__contactsDataPart}>
                  <div className={s.contacts__contactsDataPartTitle}>
                    <SiGooglemaps color="#017683" size={30} />
                    <h3 className={s.contacts__contactsDataTitle}>
                      {t('Address')}
                    </h3>
                  </div>
                  <span className={s.contacts__contactsDataText}>
                    Calle Bruselas, 10, isla IV, 43-C, Playa D'Aro, Girona,
                    17250
                  </span>
                </div>
                <div className={s.contacts__contactsDataPart}>
                  <div className={s.contacts__contactsDataPartTitle}>
                    <FaRegClock color="#017683" size={30} />
                    <h3 className={s.contacts__contactsDataTitle}>
                      {t('Schedule')}
                    </h3>
                  </div>
                  <span className={s.contacts__contactsDataText}>
                    {t('Mon-Sun: 9:00 — 21:00')}
                  </span>
                </div>
                <div className={s.contacts__contactsDataPart}>
                  <div className={s.contacts__contactsDataPartTitle}>
                    <MdLocalPhone color="#017683" size={30} />
                    <h3 className={s.contacts__contactsDataTitle}>
                      {t('Phone/Whatsapp')}
                    </h3>
                  </div>
                  <a className={s.footer__link} href="tel:+34614258852">
                    <span className={s.contacts__contactsDataText}>
                      +34 614 258 852
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className={s.contacts__btnContent}>
              <Button text="Make an appoitment" btnClass="btnLight" />
              <a className={s.footer__link} href="tel:+34614258852">
                <Button text="Make a call" btnClass="btnLight" />
              </a>
              <a href="https://wa.me/+34614258852">
                <Button text="Get a consultation" btnClass="btnLight" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurContacts;
