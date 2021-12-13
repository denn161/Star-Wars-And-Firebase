
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './Video.module.css';
import video from './video/video.mp4'


const Video = ({classes,playbackRate=1.0}) => {
   
   const videoRef = useRef()

  
   useEffect(() => {
   videoRef.current.playbackRate=playbackRate 
  },[playbackRate])

  return (
    <div className={styles.wrapper}>
      <video loop
             autoPlay
             muted
             className={cn(styles.video, classes)}
             playbackRate={playbackRate}
             ref={videoRef}>
     <source src={video} />
      </video>      
    </div>
  );
}


Video.propTypes = {
  classes: PropTypes.string,
  playbackRate:PropTypes.number
}
export default Video;