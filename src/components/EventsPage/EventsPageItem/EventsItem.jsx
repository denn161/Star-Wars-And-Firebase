import { useState } from 'react';
import{Link} from 'react-router-dom'
import { useTransition, animated, config } from 'react-spring'
import PropTypes from 'prop-types';
import { images } from './images';
import styles from './EventsItem.module.css';
import './index.css'

const EventsItem = () => {

 const [show, set] = useState(true)
    
  const transitions = useTransition(show, {
    from: { opacity: 0,transform:'translateX(-100%)' },
    enter: { opacity: 1,transform:'translateX(0%)' },
    leave: { opacity: 0},
    reverse: show,
    delay: 200,
    config: config.molasses,
    onChange:()=>set(show)
  })   
    
    return (
        <div className={styles.wrapper}>
      {transitions(
      (styles, item) => item && (
         <>
      {images.map(({ id, img, title,subtitle }) =>
      <animated.div className='events__box' key={id} style={styles}>
          <Link className='events__link' to={`/events/${id}`}>
              <img className='events__img' src={img} alt="PhotLocation" />
          <div className='events__description'>
             <div className='events__title'>{title.toUpperCase()}</div>
              <div className='events__subtitle'>{subtitle}</div>
              </div>
              </Link>
     </animated.div>
          
              )}
          </>      
      ))
            }      
        </div>
  )

 
}


EventsItem.propTypes = {
  string: PropTypes.string
}
export default EventsItem;

// 