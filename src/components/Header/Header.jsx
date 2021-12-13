
import { useEffect, useState } from 'react';
import { NavLink,Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { linksHeader } from '@routes';
import { logOut } from '@services/firebase'
import { signOutProfile } from '@store/auth/actions';
import { selectAuth } from '@store/auth/selectors';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context';
import Favorite from '../Favorite';
import imgNeitral from './img/droid.svg';
import imgLight from './img/lightsaber.svg';
import imgDark from './img/space-station.svg';
import starWars from './img/star-wars.png'
import styles from './Header.module.css';



const Header = () => {

  const [themicon, setThemeIcon] = useState()
  
  const { auth } = useSelector(selectAuth)
  const dispatch = useDispatch()

  const { theme } = useTheme()

  const handleLogout = async () => {   
      try {
        await logOut()
      dispatch(signOutProfile())
      
     } catch (error) {
       console.log(error.message)       
     }    
  }     
  
  
  useEffect(() => {
    switch (theme) {
      case THEME_LIGHT: return setThemeIcon(imgLight)
      case THEME_DARK:  return setThemeIcon(imgDark)
      case THEME_NEITRAL:return setThemeIcon(imgNeitral)    
      default: return setThemeIcon(imgLight)
    }

  },[theme])
  

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
          <img className={styles.logo} src={themicon} alt="ThemeIcon" />
          <ul className={styles.header__list}>        
          {linksHeader.map(({to, component,id}) =>           
              <li className={styles.header__item}  key={id}>
              <NavLink to={to}>
               {component}
                </NavLink>
                </li>             
          )}
      </ul>
       </div>
      <div className={styles.header__box}>
      {auth && <button
        className={styles.signout__btn}
        onClick={handleLogout} >SIGN OUT
      </button>}
        <Link to='/'>
          <img className={styles.header__img} src={starWars} alt="StarWarsLogo" /></Link>
     </div>
     
      {auth&& <Favorite />}
      
   
         
    </div>
  );
}


export default Header;