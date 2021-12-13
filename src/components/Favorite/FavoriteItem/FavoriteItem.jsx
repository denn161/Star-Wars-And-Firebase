import {Link} from 'react-router-dom'

import PropTypes from 'prop-types';
import styles from './FavoriteItem.module.css';


const FavoriteItem = ({favoritePersons}) => {
  return (      
      <div className={styles.wrapper}>
       {favoritePersons.map(({ name, photo,id }) =>
            <div className={styles.favorite__item} key={id}>
           <Link to={`/people/${id}`}>
              <p className='header__text'>{name}</p>
              <img className={styles.favorite__img} src={photo} alt={name} />
           </Link>
             </div>
          )}       
      </div>    
  
  );
}

FavoriteItem.propTypes = {
  FavoritePersons: PropTypes.array
}
export default FavoriteItem;