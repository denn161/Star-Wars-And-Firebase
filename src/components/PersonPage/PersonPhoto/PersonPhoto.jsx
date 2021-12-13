import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPersonToFavorite, removePersonToFavorite } from '@store/favorites/actions';
import favoriteIconFill from './img/favorite-fill.svg'
import favoriteIcon from './img/favorite.svg'
 
import styles from './PersonPhoto.module.css';


const PersonPhoto = ({ personPhoto, personName, personId,favorite,setFavorite }) => {
  
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (favorite) {
         dispatch(removePersonToFavorite(personId))
         setFavorite(false)
           
    } else {

      const person = {
     [ personId]: {
        name: personName,
         photo:personPhoto
        }   
       }
        dispatch(addPersonToFavorite(person))
         setFavorite(true)      
    }
  }

  return (
    <>
    <div className={styles.person__photo}>
        <img className={styles.img} src={personPhoto} alt={personName} />
        <img  className={styles.favorite__icon} onClick={dispatchFavoritePeople} src={favorite?favoriteIconFill:favoriteIcon} alt="Icon" />    
      </div>
      
   
    </>
     
  );
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId:PropTypes.string
}
export default PersonPhoto;