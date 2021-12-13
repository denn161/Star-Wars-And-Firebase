
import React, { useEffect, useState,Suspense } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import withErrorApi from '@hoc/withErrorApi';
import { API_PERSONAGE } from '@constants/api';
import { getPeopleImage } from '@services/getPeopleData';
import { getApiResurce } from '@utils/network'
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonLinkBacke from '@components/PersonLinkBacke';
import Loading from '@components/Ui/Loading';
import styles from './PersonPage.module.css';
import { selectorFavorites } from '@store/favorites/selectorName';

const PersonFilms = React.lazy(()=>import('@components/PersonFilms'))


const PersonPage = ({ setErrorApi }) => {   

    const [personInfo, setPersonInfo] = useState(null)
    
    const [personName, setPersonName] = useState(null)

    const [personPhoto,setPersonPhoto] = useState(null)

    const [personFilms, setPersonFilms] = useState(null)

     const [favorite,setFavorite]=useState(false)

    const storeData = useSelector(selectorFavorites)
    
    
    const { id } = useParams()  

    useEffect(() => {
      (async () => {          
        const response = await getApiResurce(`${API_PERSONAGE}/${id}/`)
                
        storeData[id]?setFavorite(true):setFavorite(false)        
         
            if (response) {
                setPersonInfo([                    
                    {title: 'Height',
                     data:response.height
                    },         
                    {title: 'Mass',
                     data:response.mass
                    },
                    {
                     title: 'Hair',
                     data:response.hair_color                        
                    },
                     {
                     title: 'Gender',
                     data:response.gender
                    },
                    {
                     title: 'Eye',
                     data:response.eye_color, 
                         
                    },
                    {
                      title: 'Skin',
                      data:response.skin_color
                    }
                ])
                setPersonName(response.name)
              setPersonPhoto(getPeopleImage(id))
              
                response.films.length && setPersonFilms(response.films)
               setErrorApi(false)
            } else {
              setErrorApi(true)
           }    
     })()       

    },[id,setErrorApi,storeData])    
  return (
    <div className={styles.wrapper}>
    
     <PersonLinkBacke/>
           <span className={styles.person__title}>{personName}</span>
          <div className={styles.person__container}>
                <PersonPhoto personName={personName}
                             personPhoto={personPhoto}
                             personId={id}
                             favorite={favorite}
                            setFavorite={setFavorite}/>
        {personInfo && <PersonInfo personInfo={personInfo} />}
        {personFilms && (
          <Suspense fallback={<Loading theme='blue' isShadow classes/>}>
          <PersonFilms personFilms={personFilms} />
          </Suspense>
          )}
          </div>
         </div>
  );
}


PersonPage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(PersonPage);