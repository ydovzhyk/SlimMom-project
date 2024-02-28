import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import reception from '../../images/our-mission/01.png';
import examination from '../../images/our-mission/02.png';
import teeth from '../../images/our-mission/03.png';
import consultation from '../../images/our-mission/04.png';
import selection from '../../images/our-mission/05.png';
import Button from 'components/Shared/Button';

import s from './OurMission.module.scss';

const OurMission = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <img
      src={reception}
      alt="patient at the reception"
      height="480"
      width="480"
    />,
    <img src={examination} alt="dental examination" height="480" width="480" />,
    <img src={teeth} alt="the teeth" height="480" width="480" />,
    <img
      src={consultation}
      alt="prosthetic consultation"
      height="480"
      width="480"
    />,
    <img
      src={selection}
      alt="tooth shade selection"
      height="480"
      width="480"
    />,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className={s.mission}>
      <div className="container">
        <div className={s.mission__content}>
          <div className={s.mission__titleContent}>
            <div className={s.mission__titleImg}></div>
            <div className={s.mission__titleTextContent}>
              <h2 className={s.mission__title}>
                <span className={s.mission__titleOther}>{t('About ')}</span>
                {t('Us')}
              </h2>
              <div className={s.mission__textBox}>
                <p className={s.mission__text}>{t('Our Mission')}</p>
              </div>
            </div>
          </div>
          <div className={s.mission__main}>
            <div className={s.mission__sliderContainer}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${s.mission__sliderPhoto} ${
                    index !== currentSlide ? s.hidden : ''
                  }`}
                >
                  {slide}
                </div>
              ))}
              <div className={s.mission__btnPart}>
                <button
                  className={s.mission__btnPrev}
                  onClick={() =>
                    setCurrentSlide(
                      (currentSlide - 1 + slides.length) % slides.length
                    )
                  }
                >
                  ←
                </button>
                <button
                  className={s.mission__btnNext}
                  onClick={() =>
                    setCurrentSlide((currentSlide + 1) % slides.length)
                  }
                >
                  →
                </button>
              </div>
            </div>
            <ul className={s.mission__textContainer}>
              <li className={s.mission__groupText}>{t('mission one')}</li>
              <li className={s.mission__groupText}>{t('mission two')}</li>
              <li className={s.mission__groupText}>{t('mission thre')}</li>
              <li className={s.mission__groupText}>{t('mission four')}</li>
            </ul>
          </div>
          <div className={s.mission__btnBottomPart}>
            <Button text="Make an appoitment" btnClass="btnLight" />
            <a href="https://wa.me/+34614258852">
              <Button text="Get a consultation" btnClass="btnLight" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
