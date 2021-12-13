

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectorFavorites } from '@store/favorites/selectorName';
import icon from './img/bookmark.svg'
import styles from './Favorite.module.css';


const Favorite = () => {

    const [counter, setCounter] = useState(null)
    
    const storeData = useSelector(selectorFavorites)     

   
    useEffect(() => {

      const length = Object.keys(storeData).length

      length.toString().length > 2 ? setCounter('...') : setCounter(length)

    },[storeData])

    return (
        <div className={styles.container}>
         <span className={styles.counter}>{counter}</span>
            <Link style={{width:'fit-content'}} to='/favorites'>        
     <img className={styles.icon} src={icon} alt="Favorite" />  
            </Link>
          
    </div>
  );
}


export default Favorite;