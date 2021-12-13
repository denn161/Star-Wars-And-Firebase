
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@ui/Button';
import styles from './PeopleNavigation.module.css';


const PeopleNavigation = ({ getResurce, prevPage, nextPage, counterPage }) => {
    
  
    const handleClickNext = () => getResurce(nextPage)
    

    const handleClickPrev = () => getResurce(prevPage) 

    
  return (
      <div className={styles.wrapper}>
         <Link
              className={styles.link}
              to={`/people/?page=${counterPage - 1}`}>
              <Button
                  disabled={!prevPage}
                  onClick={handleClickPrev}
                  >
                  Previous
              </Button>
          </Link>
          <Link
              className={styles.link}
              to={`/people/?page=${counterPage + 1}`}>
              <Button
                  disabled={!nextPage}
                  onClick={handleClickNext}
                  classes={styles.test} >
                  Next
              </Button>
          </Link>
      </div>      
  );
}


PeopleNavigation.propTypes = {
  setErrorApi: PropTypes.func
}
export default PeopleNavigation;