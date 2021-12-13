
import { Link } from 'react-router-dom';
import {signUp} from '@services/firebase'
import PropTypes from 'prop-types';
import AuthForm from '@components/AuthForm/AuthForm';
import kailo from './img/kailo.jpg'
import styles from './LoginPage.module.css';


const LoginPage = () => {
 
//  const [error, setError] = useState()
//  const [loading, setLoading] = useState(false)


 const handleClickSignUp = async (email, pass) => {
    // setLoading(true)  
      try {
        await signUp(email,pass)
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
        classes={styles.box}
        text='Зерегаться'
        link={<Link className={styles.link} to='/'>SIGNIN</Link>}
        handleClickSubmit={handleClickSignUp}
        title='Logout' />
        <img className={styles.img} src={kailo} alt="KailoPhoto" />
    </div>
  );
}


LoginPage.propTypes = {
  string: PropTypes.string
}
export default LoginPage;