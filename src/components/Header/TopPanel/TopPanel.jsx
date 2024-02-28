import React, { useState, useEffect } from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { MdLocalPhone } from 'react-icons/md';
import { SlHome } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';
import s from './TopPanel.module.scss';

const TopPanel = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className={s.topPanel}>
        <div className={s.topPanel__part}>
          <SlHome color="white" />
          <span className={s.topPanel__text}>Art Studio Dental</span>
          <span className={s.topPanel__text}>
            Calle Bruselas, 10, isla IV, 43-C, Playa D'Aro, Girona, 17250
          </span>
        </div>
        <a className={s.topPanel__part} href="tel:+34614258852">
          <MdLocalPhone color="white" />
          <span className={s.topPanel__text}>+34 614 258 852</span>
        </a>
        <a className={s.topPanel__part} href="https://wa.me/+34614258852">
          <BsWhatsapp color="white" />
          <span className={s.topPanel__text}>WhatsApp</span>
        </a>

        <a className={s.topPanel__part} href="/map">
          <SiGooglemaps color="white" />
          <span className={s.topPanel__text}>Google Map</span>
        </a>
      </div>
    )
  );
};

export default TopPanel;
