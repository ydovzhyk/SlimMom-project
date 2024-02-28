import React from 'react';
import s from './GoogleMap.module.scss';
const GoogleMap = () => {
  return (
    <div className={s.maps}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1525.4307512553157!2d3.060301530288141!3d41.816754507800674!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQ4JzU5LjgiTiAzwrAwMyczOC42IkU!5e0!3m2!1suk!2snl!4v1709035349119!5m2!1suk!2snl"
        width="100%"
        height="400"
        title="googleMap"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
