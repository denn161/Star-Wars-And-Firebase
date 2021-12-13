
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import PropTypes from 'prop-types';
import styles from './AuthForm.module.css';


const AuthForm = ({classes,handleClickSubmit,link,text,title}) => {
  const { register, handleSubmit, reset, formState: { errors} } = useForm({
    mode: 'onBlur',
    
 });

  const onSubmit = data => {
    handleClickSubmit(data.email,data.password)
    reset()    
  }
    
  return (
    <div className={styles.wrapper}>        
          <form className={cn(classes)} onSubmit={handleSubmit(onSubmit)}>
              <h1 className={styles.title}>{title}</h1>
          <input
          {...register('email', {
            required: 'The field is required to fill in',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message:'Please enter the email format box@mail.ru'
            }
                  })}
                  className={styles.input}
                  type="text"
                  placeholder='Email'/>       
            {errors?.email &&
          <p className={styles.error__text}>{errors?.email?.message || 'Error'}</p>}  
        
        <input
          className={styles.input}
          type="password"
          placeholder='Password'
         {...register('password', {
            required: 'The field is required to fill in',
            minLength: {
              value:8,
              message:'Please enter from 8 to 20 characters, including numbers and letters'
            }
         })} />
           {errors?.password &&
          <p className={styles.error__text}>{errors?.password?.message || 'Error'}</p>}        
        <input
          className={styles.btn}
          type="submit"
          value={text}
           />
                {link}
          </form>
      </div>
  );
}

AuthForm.propTypes = {
  classes: PropTypes.string,
  handleClickSubmit: PropTypes.func,
  link: PropTypes.object,
  text:PropTypes.string
}
export default AuthForm;