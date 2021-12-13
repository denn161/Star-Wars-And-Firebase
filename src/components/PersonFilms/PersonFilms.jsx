
import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeConCurrentRequest } from '@utils/network';
import styles from './PersonFilms.module.css';


const PersonFilms = ({ personFilms }) => {

    const [films,setFilms] =useState([])    
   
    useEffect(() => {
        (async () => {
            const res = await makeConCurrentRequest(personFilms)
            setFilms(res)
        })()
    },[personFilms])

  return (
      <div className={styles.wrapper}>
          <ul className={styles.films__list}>
              {films.sort((a,b)=>a.episode_id-b.episode_id).map(({ title, episode_id }) =>
                  <li className={styles.films__item} key={episode_id}>
                      <p><span className={styles.films__episode}>Episode:{episode_id}</span>,<span className={styles.films__name}>Film:{title}</span></p>
                  </li>              
              )}          
          </ul>
          
    </div>
  );
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array
}
export default PersonFilms;