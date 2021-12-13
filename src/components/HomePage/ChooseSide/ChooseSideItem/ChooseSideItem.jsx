
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './ChooseSideItem.module.css';


const ChooseSideItem = ({ thems, change }) => {
       
  return (
      <>
          {thems.map(({ img, theme, text, classes }) =>          
          <div className={cn(styles.item,classes)}
               key={theme}
               onClick={() => change(theme)}>
              <img className={styles.item__img} src={img} alt={theme} />
               <span className='side__name'>{text}</span>
            </div>
         )}      
      </>
  );
}


ChooseSideItem.propTypes = {
  thems: PropTypes.array
}
export default ChooseSideItem;