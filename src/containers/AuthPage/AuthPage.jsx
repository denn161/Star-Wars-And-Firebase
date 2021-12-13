import { Link } from 'react-router-dom'; 
import {logIn} from '@services/firebase'
import AuthForm from '@components/AuthForm/AuthForm';
import styles from './AuthPage.module.css';
import { useDispatch } from 'react-redux';
import { signInProfile } from '../../store/auth/actions';
import SwiperItem from '@components/SwiperItem/SwiperItem';

 const AuthPage = () => {
  
  //  const [error, setError] = useState()
  //  const [loading, setLoading] = useState(false)
   const dispatch = useDispatch()

   
 const handleClickSignUp = async (email, pass) => {
    // setLoading(true)  
      try {
        await logIn(email, pass)
        dispatch(signInProfile() )
      } catch (error) {
        // setError(error.message)     
        console.log(error.message)        
      } finally {
        // setLoading(false)
      }
  }

  return (
      <div className={styles.wrapper}>
      <AuthForm
        text='Войти'
        classes={styles.box}
        link={<Link className={styles.link} to='/login'>Регистрация</Link>}
        handleClickSubmit={handleClickSignUp}
        title='Login' />
      {/* <img className={styles.luk__photo} src={photoLuk} alt="Luk Skay" /> */}
      <SwiperItem/>
    </div>
  );
}

export default AuthPage;