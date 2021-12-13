import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import blackLoader from './img/loader-black.svg';
import blueLoader from './img/loader-blue.svg';
import whiteLoader from './img/loader-white.svg';
import styles from './Loading.module.css';



const Loading = ({ theme='white', classes,isShadow=true }) => {
    
    const [loaderIcon, setLoaderIcon] = useState(null)
    

    useEffect(() => {
        switch (theme) {
            case 'white':
                return setLoaderIcon(whiteLoader)
            case 'black':
                return setLoaderIcon(blackLoader)
            case 'blue':
                return setLoaderIcon(blueLoader)     
        
            default:
                return setLoaderIcon(whiteLoader)
        }        
    },[theme])
  return (
    <div><img className={cn(styles.loader,isShadow&&styles.shadow,classes)} src={loaderIcon} alt="Loader" /></div>
  );
}


Loading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool
  
}
export default Loading;