
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';
import back from './img/back.svg'
import styles from './PersonLinkBacke.module.css';



const PersonLinkBacke = () => {

  const navigate = useNavigate()
   
  const handleGoBack = () => navigate(-1)


  return (
    <button className={styles.btn__back} onClick={handleGoBack}>
      <img className={styles.img__back} src={back} alt="Go Back" />
      Go Back
    </button>
  );
}


PersonLinkBacke.propTypes = {
  setErrorApi: PropTypes.func
}
export default PersonLinkBacke;