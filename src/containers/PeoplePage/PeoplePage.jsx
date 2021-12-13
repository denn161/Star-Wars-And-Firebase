 
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getApiResurce } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage,getPeoplePageId } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import withErrorApi from '@hoc/withErrorApi';
import { useQueryParams } from '@hooks';

import styles from './PeoplePage.module.css';


const PeoplePage = ({setErrorApi}) => {
    
  const [peopleList, setPeopleList] = useState(null)

  const  [prevPage, setPrevPage] = useState('')
  const  [nextPage, setNextPage] = useState('')
  const [counterPage, setCounterPage] = useState(1)
  
  
  const query = useQueryParams()
  const queryPage = query.get('page')
  

  const getResurce = useCallback(async (url) => {
      
    const response = await getApiResurce(url)   
      console.log(response)
    if (response) {
        const peopleList = response.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)
          
        return {name,url,id,img}
        })
      setPeopleList(peopleList)
      setNextPage(response.next)
      setCounterPage(getPeoplePageId(url))
      setPrevPage(response.previous) 
      setErrorApi(false)      

      } else {
       setErrorApi(true)
    } 

    },[setErrorApi])
   
  useEffect(() => {
  getResurce(API_PEOPLE+queryPage)
    },[getResurce,queryPage])
  return (

    <div className={styles.wrapper}>   
      <PeopleNavigation
        getResurce={getResurce}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage} />
      
    {peopleList&& <PeopleList peopleList={peopleList}/> }    
    </div>
  );
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(PeoplePage);