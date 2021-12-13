
import PropTypes from 'prop-types';
import cn from 'classnames'
import { useState,useRef, useEffect } from 'react';

import iconInput from './img/cancel.svg'
import '../index.css'

import styles from './Input.module.css';

const Input = ({ getResponse}) => {
  
  const [value, setValue] = useState('')

   const inputRef = useRef()

  const handleClearInput = () => {
    if (value.trim()) {
    console.log('gbggb')
    setValue('')  
        }
   
    inputRef?.current.focus()
  }
  
   const changeValue = (e) => {
       
   setValue(e.target.value)
    }
    
  const handleSubmit = (e) => {
         e.preventDefault()
         getResponse(value)
         setValue('')
  }
  
  useEffect(() => {
   inputRef?.current.focus()  

  },[])

  return (
    <div className={styles.wrapper}>
        <form   onSubmit={handleSubmit}>
          <input ref={inputRef} className={styles.input}
              value={value}
              type="text"
              onChange={changeValue}
             placeholder='Search characters name' />         
             <img onClick={handleClearInput} className={cn(styles.clear,!value&&styles.clear__disabled)} src={iconInput} alt='Cancel' />
        
      
      </form>

    </div>
    
  );
}

Input.propTypes = {
  getResponse: PropTypes.func
}
export default Input;