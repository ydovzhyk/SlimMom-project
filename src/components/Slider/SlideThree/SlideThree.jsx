import { useTranslation } from 'react-i18next';
import Button from 'components/Shared/Button';
import image from '../../../images/slide/smile.png';
import s from '../SlideOne/SlideOne.module.scss';

const SlideThree = () => {
  const { t } = useTranslation();
  return (
    <div className={s.slide}>
      <div className="container">
        <div className={s.slide__content}>
          <div className={s.slide__part}>
            <h2 className={s.slide__title}>
              {t(
                'Professional Assistance from Experienced Dentists'
              ).toUpperCase()}
            </h2>
            <p className={s.slide__text}>
              {t('We care for your smile to make it shine brightly')}
            </p>
            <a href="https://wa.me/+34614258852">
              <Button text="Get a consultation" btnClass="btnLight" />
            </a>
          </div>
          <img src={image} alt="toothache" height="420" width="640" />
        </div>
      </div>
    </div>
  );
};

export default SlideThree;
