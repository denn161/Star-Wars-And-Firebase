
import { useParams } from 'react-router';
import {descriptions} from './description'
import PropTypes from 'prop-types';
import PersonLinkBacke from '@components/PersonLinkBacke';
import styles from './EventsDescription.module.css';

const EventsDescription = () => {

  const {id}=useParams()
   
  return (
    <div className={styles.wrapper}>   
        <PersonLinkBacke/>
      <div className={styles.title__box}>
      <h1 className='header__text'>ПОЯВЛЕНИЯ</h1>
       <p className={styles.subtitle}>Эпизод I</p>
     </div>
      {descriptions.filter((item) => item.id === id).map(({ img, id, descr }) =>
        <div key={id}>
        <div className={styles.img__box}><img className={styles.img} src={img} alt="LocationPhoto" /></div>
          <div className={styles.text}>
         {descr}
           </div>
        </div>
      )}
    
    </div>
  );
}


EventsDescription.propTypes = {
  string: PropTypes.string
}
export default EventsDescription;