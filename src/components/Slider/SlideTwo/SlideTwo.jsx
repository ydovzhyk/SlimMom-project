import { useTranslation } from 'react-i18next';
import Button from 'components/Shared/Button';
import image from '../../../images/slide/clinic.png';
import s from '../SlideOne/SlideOne.module.scss';

const SlideTwo = () => {
  const { t } = useTranslation();
  return (
    <div className={s.slide}>
      <div className="container">
        <div className={s.slide__content}>
          <div className={s.slide__part}>
            <h2 className={s.slide__titleFirst}>{t('Dental clinic')}</h2>
            <h2 className={s.slide__title}>
              {t('Art Studio Dental').toUpperCase()}
            </h2>
            <p className={s.slide__text}>
              {t('We provide a full range of dentistry and aesthetic services')}
            </p>
            <a className={s.slide__link} href="https://wa.me/+34614258852">
              <Button text="Get a consultation" btnClass="btnLight" />
            </a>
          </div>
          <img
            src={image}
            alt="toothache"
            height="420"
            width="523"
            style={{ marginRight: '100px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideTwo;
