
import { useState,useEffect, useCallback } from 'react';
import {useSelector} from 'react-redux'
import { selectorFavorites } from '@store/favorites/selectorName';

import styles from './FavoritePage.module.css';
import FavoriteItem from '@components/Favorite/FavoriteItem';


const FavoritePage = () => {
   const [favoritePersons,setFavoritePersons]=useState(null)

    const stateData = useSelector(selectorFavorites)
     
  const takingFavorites = useCallback(() => {
    const array = Object.entries(stateData)
    if (array.length) {
       const persons = array.map((item) => {
         return {
           id: item[0],
           ...item[1]
        }
       })
        console.log(persons)
        setFavoritePersons(persons)
         
       }  
   
     },[stateData])
    
  
  useEffect(() => {
    takingFavorites()

},[takingFavorites])
  
  return (
      <div className={styles.wrapper}>
      {favoritePersons ? (
        <FavoriteItem favoritePersons={favoritePersons}/>
      )  : (<h2 className='header__text'>No data</h2>)}

    </div>
  );
}



export default FavoritePage;