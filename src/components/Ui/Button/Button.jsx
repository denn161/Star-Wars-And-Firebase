import PropTypes from 'prop-types';
import cn from 'classnames'
import '../index.css'
import styles from './Button.module.css';
const Button = ({children,onClick,disabled,theme='dark',classes}) => {
  return (
      <button onClick={onClick}
             disabled={disabled}
             className={cn(styles.ui__button,styles[theme],classes)}>
            {children}
     </button>
  );
}


Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes:PropTypes.string
}
export default Button;