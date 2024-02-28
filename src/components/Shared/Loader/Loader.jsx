import { Oval } from 'react-loader-spinner';

import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Oval
        height="130"
        width="130"
        color="#017683"
        secondaryColor="transparent"
      />
    </div>
  );
};

export default Loader;
