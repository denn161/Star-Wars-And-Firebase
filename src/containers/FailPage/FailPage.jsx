import PropTypes from 'prop-types';
import ErrorMessage from '@components/ErrorMessage'
import Video from '@ui/Video'
import styles from './FailPage.module.css';

const FailPage = () => {
  return (
    <div className={styles.wrapper}>     
      <ErrorMessage />
       <Video playbackRate={1.0}/>         
    </div>
  );
}


FailPage.propTypes = {
  string: PropTypes.string
}

export default FailPage;