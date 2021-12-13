import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination} from 'swiper';
import { images } from './constants';
 import '../../../node_modules/swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import styles from './SwiperItem.module.css';

const SwiperItem = () => {
 

  return (
    <Swiper
      className={styles.wrapper} 
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map(({ img, id }) =>
        <SwiperSlide className={styles.block__img} key={id}>
          <img className={styles.img} src={img} alt="SlidePhoto" /></SwiperSlide>
      )}
     </Swiper>
  );
}


Swiper.propTypes = {
  string: PropTypes.string
}
export default SwiperItem;