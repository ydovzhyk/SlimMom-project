import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Shared/Button';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './NotFound.module.scss';

const NotFound = ({ textContent, backLink, classComp, onDismiss, text }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const handleDismissClick = () => {
    setIsDisplayed(false);
    if (typeof onDismiss === 'function') {
      onDismiss();
    }
  };

  useEffect(() => {
    setIsDisplayed(true);
  }, [text]);

  if (!isDisplayed) {
    return null;
  }
  return (
    <div className={s[classComp]}>
      <button className={s.dismissButton} onClick={handleDismissClick}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <div className={s.boo}>
        <div className={s.face} id="face"></div>
      </div>
      <div className={s.shadow}></div>
      <h1 className={s.title}>Oh!</h1>
      <p className={s.txt}>{textContent}</p>
      {backLink && (
        <Link to={backLink}>
          <Button text="Go back" btnClass="btnDark" />
        </Link>
      )}
    </div>
  );
};

export default NotFound;
