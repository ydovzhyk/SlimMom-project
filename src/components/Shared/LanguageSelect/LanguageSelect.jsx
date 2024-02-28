import React from 'react';
import s from './LanguageSelect.module.scss';

const LanguageSelect = ({ changeLanguage }) => {
  const handleSelectChange = event => {
    changeLanguage(event.target.value);
  };

  return (
    <select className={s.select} onChange={handleSelectChange}>
      <option className={s.option} value="en">
        EN
      </option>
      <option className={s.option} value="es">
        ES
      </option>
      <option className={s.option} value="ru">
        RU
      </option>
    </select>
  );
};

export default LanguageSelect;
