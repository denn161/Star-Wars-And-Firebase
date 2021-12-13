

import { useLocation } from 'react-router-dom';
import img from './img/not-found.jpg'
import styles from './NotFoundItem.module.css';


const NotFoundItem = () => {
    let location = useLocation()
   
  return (    
    <div className={styles.notfound__item}>
    <img src={img} alt="Not Found" className={styles.notfound__img} />
    <p className={styles.notfound__text}>No math for <u>{location.pathname}</u></p>
    </div>     
  
  );
}


export default NotFoundItem;