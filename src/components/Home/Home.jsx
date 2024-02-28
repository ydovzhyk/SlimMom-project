import Slider from 'components/Slider';
import OurServices from 'components/OurServices';
import TrustUs from 'components/TrustUs';
import OurMission from 'components/OurMission';
import OurContacts from 'components/OurContacts';
import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.home}>
      <Slider />
      <OurServices />
      <OurMission />
      <TrustUs />
      <OurContacts />
    </div>
  );
};

export default Home;
