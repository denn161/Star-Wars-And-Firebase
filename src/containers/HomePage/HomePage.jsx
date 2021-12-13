
import ChooseSide from '@components/HomePage/ChooseSide';

import styles from './HomePage.module.css';

const HomePage = () => {

  return (
    <div className={styles.container}>
      <h1 className='header__text'>HomePage</h1>
      <ChooseSide/>
    </div>
  );
}


export default HomePage;