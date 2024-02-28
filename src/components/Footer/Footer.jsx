import { useTranslation } from 'react-i18next';
import { SiGooglemaps } from 'react-icons/si';
import { MdLocalPhone } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import s from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__content}>
          <div className={s.footer__part}>
            <span className={s.footer__partTitle}>Art Studio Dental</span>
            <a className={s.footer__link} href="/map">
              <SiGooglemaps color="white" />
              <span className={s.footer__text}>
                Calle Bruselas, 10, isla IV, 43-C, Playa D'Aro, Girona, 17250
              </span>
            </a>
            <a className={s.footer__link} href="tel:+34614258852">
              <MdLocalPhone color="white" />
              <span className={s.footer__text}>+34 614 258 852</span>
            </a>
            <a className={s.footer__link} href="https://wa.me/+34614258852">
              <BsWhatsapp color="white" />
              <span className={s.footer__text}>WhatsApp</span>
            </a>
            <div className={s.footer__partS}>
              <span className={s.footer__partTitle}>{t('Schedule')}</span>
              <span className={s.footer__textP}>
                {t('Mon-Sun: 9:00 — 21:00')}
              </span>
            </div>
          </div>
          <div className={s.footer__part}>
            <span className={s.footer__partTitle}>{t('Services')}</span>
            <a className={s.footer__link} href="/">
              <span className={s.footer__textS}>{t('Dental treatment')}</span>
            </a>
            <a className={s.footer__link} href="/">
              <span className={s.footer__textS}>
                {t('Hygiene and whitening')}
              </span>
            </a>
            <a className={s.footer__link} href="/">
              <span className={s.footer__textS}>{t('Prosthetics')}</span>
            </a>
            <a className={s.footer__link} href="/">
              <span className={s.footer__textS}>{t('Implantology')}</span>
            </a>
            <a className={s.footer__link} href="/">
              <span className={s.footer__textS}>{t('Orthodontics')}</span>
            </a>
            <a className={s.footer__linkS} href="/">
              <span className={s.footer__textS}>{t('CT scan')}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
