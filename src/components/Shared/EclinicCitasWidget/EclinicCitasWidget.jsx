import { useEffect } from 'react';

const EclinicCitasWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.id = 'eclinic-citas-widget-script';
    script.domain = 'https://www.dasieclinic.com';
    script.title =
      'ca39f66d5091355a6e82ef6e574ac5af81d3ac704d8cdec25ce261607f991406';
    script.dataset.toogle = 'tooltip';
    script.src =
      'https://www.dasieclinic.com/public/widget/cites/js/api_v1_0.js';
    script.type = 'text/javascript';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default EclinicCitasWidget;
