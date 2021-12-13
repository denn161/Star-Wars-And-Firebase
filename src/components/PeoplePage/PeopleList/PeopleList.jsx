import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './PeopleList.module.css';


const PeopleList = ({peopleList}) => {
  return (
      <>
           <ul className={styles.people__list}>
              {peopleList.map(({ name, id,img }) =>
                <li className={styles.people__item} key={id}>
                  <Link to={`/people/${id}`}>
                <img className={styles.people__img} src={img} alt="Personage"/>
                 <p className={styles.people__name}>{name}</p>
                  </Link>            
                  </li>
              )}
         </ul>
    </>
  );
}


PeopleList.propTypes = {
  peopleList: PropTypes.array
}
export default PeopleList;