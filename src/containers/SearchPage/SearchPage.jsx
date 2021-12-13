import {useState,useEffect,useCallback} from 'react'
import PropTypes from 'prop-types';
import Input from '@ui/Input'
import { getPeopleId, getPeopleImage} from '@services/getPeopleData';
import { getApiResurce } from '@utils/network';
import { API_PERSONAGE_SEARCH } from '@constants/api'
import  SearchPageItem from '@components/SearchPage/SearchPageItem'
import withErrorApi from '@hoc/withErrorApi';

import styles from './SearchPage.module.css';

   const SearchPage = ({setErrorApi}) => {

  const [people,setPeople] = useState([])   
     
  const getResponse = useCallback(async(name) => {
       console.log('param')
  const res = await getApiResurce(API_PERSONAGE_SEARCH + name)
             if (res) {
               const peopleList = res.results.map(({ name, url }) => {
                 const id = getPeopleId(url);
                 const img = getPeopleImage(id)
                 return {
                   id,img,name
                 }
               })
         setPeople(peopleList)

              setErrorApi(false)
            } else {
              setErrorApi(true)              
          }
     },[setErrorApi] )
     useEffect(()=>{
       getResponse('')
       
     },[getResponse])

  return (
      <div className={styles.wrapper}>
      <h1 className='header__text'>Search</h1>
      <Input getResponse={getResponse} />
      <SearchPageItem people={people}                
      classes={styles.input__ower}/>
    </div>
  );
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(SearchPage);