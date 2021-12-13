
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context';
import ChooseSideItem from './ChooseSideItem';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';
import './index.css'

import styles from './ChooseSide.module.css';


const ChooseSide = () => {

    const {change} = useTheme()
    
     const thems = [
        {    theme: THEME_LIGHT,
             text: 'Light Side',
             img: imgLightSide,
             classes:styles.item__light
           },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: imgDarkSide,
            classes:styles.item__dark
        },

        {  theme: THEME_NEITRAL,
           text: 'I^m Han Solo',
           img: imgFalcon,
           classes:styles.item__neitral
        }     
    ]   
   
  return (
  <div className={styles.wrapper}>
    <ChooseSideItem thems={thems} change={change}/>
    </div>
  );
}

export default ChooseSide;