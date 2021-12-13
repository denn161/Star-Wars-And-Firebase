import PropTypes from 'prop-types';
import EventsItem from '@components/EventsPage/EventsPageItem';
import styles from './EventsPage.module.css';


const EventsPAge = () => {
  return (
    <div className={styles.wrapper}>
          {/* <h1 className='header__text'>Events of Planents Star Wars </h1> */}
            <EventsItem/>
    </div>
  );
}


EventsPAge.propTypes = {
  string: PropTypes.string
}
export default EventsPAge;