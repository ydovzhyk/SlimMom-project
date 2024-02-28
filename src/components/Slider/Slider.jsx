import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SlideOne from './SlideOne/SlideOne';
import SlideTwo from './SlideTwo/SlideTwo';
import SlideThree from './SlideThree/SlideThree';
import s from './Slider.module.scss';

const slides = [SlideOne, SlideTwo, SlideThree];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 12000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handleIndicatorClick = index => {
    setCurrentIndex(index);
  };

  const renderPagination = () => {
    return (
      <div className={s.pagination}>
        <div className={s.paginationBox}>
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)}
              style={{
                opacity: index === currentIndex ? 1 : 0.3,
              }}
              className={s.paginationDot}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={s.slider}>
      <div className={s.slider__content}>
        <div
          className={`${s.arrowButton} ${s.arrowButtonLeft}`}
          onClick={goToPreviousSlide}
        >
          <FiChevronLeft
            size={60}
            strokeWidth={1}
            className={s.arrowlinkLeft}
          />
        </div>
        <div
          className={`${s.arrowButton} ${s.arrowButtonRight}`}
          onClick={goToNextSlide}
        >
          <FiChevronRight
            size={60}
            strokeWidth={1}
            className={s.arrowlinkRigth}
          />
        </div>
        {renderPagination()}
      </div>

      {slides.map((Slide, index) => (
        <div
          key={index}
          className={s.slider__currentSlide}
          style={{
            zIndex: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <Slide />
        </div>
      ))}
    </div>
  );
};

export default Slider;
