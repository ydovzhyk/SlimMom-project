import { useTranslation } from 'react-i18next';
import treatment from '../../images/services-part/treatment.svg';
import hygiene from '../../images/services-part/hygiene.svg';
import prosthetics from '../../images/services-part/prosthetics.svg';
import implantation from '../../images/services-part/implantation.svg';
import orthodontics from '../../images/services-part/orthodontics.svg';
import tomography from '../../images/services-part/tomography.svg';

import s from './OurServices.module.scss';

const OurServices = () => {
  const { t } = useTranslation();
  return (
    <div className={s.services}>
      <div className="container">
        <div className={s.services__content}>
          <div className={s.services__titleContent}>
            <div className={s.services__titleImg}></div>
            <div className={s.services__titleTextContent}>
              <h2 className={s.services__title}>
                <span className={s.services__titleOther}>{t('Our ')}</span>
                {t('dental services')}
              </h2>
              <div className={s.services__textBox}>
                <p className={s.services__text}>
                  {t('Comprehensive approach in dentistry')}
                </p>
              </div>
            </div>
          </div>
          <div className={s.services__main}>
            <div className={s.services__mainCard}>
              <div className={s.services__mainImg}>
                <img
                  src={treatment}
                  alt="treatment"
                  style={{ width: 95, height: 95 }}
                />
              </div>
              <h3 className={s.services__titleCard}>{t('Dental treatment')}</h3>
              <ul className={s.services__mainlist}>
                <li className={s.services__mainListText}>
                  {t('Treatment of caries')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Treatment of pulpitis')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Treatment of periodontitis')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Tooth restoration')}
                </li>
              </ul>
            </div>
            <div className={s.services__mainCard}>
              <div className={s.services__mainImg}>
                <img
                  src={hygiene}
                  alt="hygiene"
                  style={{ width: 95, height: 95 }}
                />
              </div>
              <h3 className={s.services__titleCard}>
                {t('Hygiene and whitening')}
              </h3>
              <ul className={s.services__mainlist}>
                <li className={s.services__mainListText}>
                  {t('Teeth whitening with “Beyond” lamp')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Ultrasonic cleaning')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Teeth fluoridation')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Teeth polishing')}
                </li>
              </ul>
            </div>
            <div className={s.services__mainCard}>
              <div className={s.services__mainImg}>
                <img
                  src={prosthetics}
                  alt="prosthetics"
                  style={{ width: 95, height: 95 }}
                />
              </div>
              <h3 className={s.services__titleCard}>{t('Prosthetics')}</h3>
              <ul className={s.services__mainlist}>
                <li className={s.services__mainListText}>
                  {t('Implant-supported prosthodontics')}
                </li>
                <li className={s.services__mainListText}>
                  {t('E-MAX crowns')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Metal-ceramic crowns')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Zirconia crowns')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Complete removable dentures')}
                </li>
              </ul>
            </div>
            <div className={s.services__mainCard}>
              <div className={s.services__mainImg}>
                <img
                  src={implantation}
                  alt="implantation"
                  style={{ width: 95, height: 95 }}
                />
              </div>
              <h3 className={s.services__titleCard}>{t('Implantology')}</h3>
              <ul className={s.services__mainlist}>
                <li className={s.services__mainListText}>
                  {t('Placement of high-quality implants')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Single-stage dental implantation')}
                </li>
                <li className={s.services__mainListText}>
                  {t('All-on-4 dental implantation')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Dental implantation in case of complete tooth loss')}
                </li>
              </ul>
            </div>
            <div className={s.services__mainCard}>
              <div className={s.services__mainImg}>
                <img
                  src={orthodontics}
                  alt="orthodontics"
                  style={{ width: 95, height: 95 }}
                />
              </div>
              <h3 className={s.services__titleCard}>{t('Orthodontics')}</h3>
              <ul className={s.services__mainlist}>
                <li className={s.services__mainListText}>
                  {t('Bite correction')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Preventive orthodontics')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Metallic braces system')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Ceramic braces system')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Teeth alignment with clear aligners')}
                </li>
              </ul>
            </div>
            <div className={s.services__mainCard}>
              <div className={s.services__mainImg}>
                <img
                  src={tomography}
                  alt="tomography"
                  style={{ width: 95, height: 95 }}
                />
              </div>
              <h3 className={s.services__titleCard}>{t('CT scan')}</h3>
              <ul className={s.services__mainlist}>
                <li className={s.services__mainListText}>
                  {t('Targeted radiography (Planmeca)')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Panoramic radiography (Planmeca)')}
                </li>
                <li className={s.services__mainListText}>
                  {t('Computed tomography (Planmeca)')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
