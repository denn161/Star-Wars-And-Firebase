
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import styles from './SearchPageItem.module.css';


const SearchPageItem = ({people}) => {
  return (
      <>
          {people.length ? (
               <ul className={styles.people__list}>
       {people.map(({ id, name, img }) =>
          <li className={styles.people__item} key={id}>
               <Link to={`/people/${id}`}>
                   <img className={styles.img} src={img} alt={name} />
                  <p className={styles.name}>{name}</p>
               </Link>
             </li>  
          )}
      </ul>
          ) : <h2 className={styles.comment}>No results.Enter to Search Personage</h2>}
      
      </>
  );
}


SearchPageItem.propTypes = {
  people: PropTypes.array
}
export default SearchPageItem;