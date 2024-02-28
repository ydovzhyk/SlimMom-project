import { useTranslation } from 'react-i18next';
import Button from 'components/Shared/Button';
import image from '../../../images/slide/toothache.png';
import s from './SlideOne.module.scss';

const SlideOne = () => {
  const { t } = useTranslation();
  return (
    <div className={s.slide}>
      <div className="container">
        <div className={s.slide__content}>
          <div className={s.slide__part}>
            <h2 className={s.slide__title}>
              {t('Dental emergency help').toUpperCase()}
            </h2>
            <p className={s.slide__text}>
              {t(
                'The working hours of our dental emergency help service are 9.00 am - 9.00 pm from Monday to Sunday'
              )}
            </p>
            <Button text="Make an appoitment" btnClass="btnLight" />
          </div>
          <img src={image} alt="toothache" height="420" />
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
