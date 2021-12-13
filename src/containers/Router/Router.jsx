
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from '@hoc/PrivateRouter'
import PublicRouter from '@hoc/PublicRouter'
import Header from "@components/Header";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage";
import PeoplePage from '../PeoplePage'
import NotFoundPage from "../NotFoundPage";
import PersonPage from "../PersonPage";
import styles from './Router.module.css'
import FavoritePage from "../FavoritePage";
import SearchPage from "../SearchPage";
import FailPage from "../FailPage";
import LoginPage from "../LoginPage";
import EventsPage from "../EventsPage";
import { auth } from '@services/firebase'
import {BASE_URL_GITHUB_PROJECT} from '@constants/repositoriy'
import { signInProfile, signOutProfile } from "@store/auth/actions";
import EventsDescription from "../EventsDescription";



const Router = () => {
    
const dispatch = useDispatch()


  useEffect(() => {
 const unsubscribe=auth.onAuthStateChanged((user) => {
   if (user) {       
    dispatch(signInProfile())     
      } else {
    dispatch(signOutProfile())
      
       }
 }) 
  return unsubscribe    
  
  }, [dispatch])  
  
    return (
      <BrowserRouter basename={`/${BASE_URL_GITHUB_PROJECT}/`}>        
        <div className={styles.wrapper}>
           <Header/>         
            <Routes>
            <Route path='/'
              element={
              <PublicRouter>
                <AuthPage />
              </PublicRouter>} />
            <Route path='/login'
               element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>} />
            <Route path='/home'
                 element={
                  <PrivateRouter>
                   <HomePage />
                 </PrivateRouter>} />
            <Route path='/people'
                   element={
                     <PrivateRouter>
                      <PeoplePage />              
                     </PrivateRouter>} />
            <Route path='/people/:id'
              element={
                <PrivateRouter>
                   <PersonPage />
                </PrivateRouter>
               } />
            <Route path='/search'
              element={
                <PrivateRouter>
                <SearchPage/>
                </PrivateRouter>
              } />
            <Route path='favorites'
              element={
                <PrivateRouter>
                  <FavoritePage />
                </PrivateRouter>
             } />
             <Route path='/events'
              element={
                <PrivateRouter>
                  <EventsPage />
                </PrivateRouter>
             } />
              <Route path='/events/:id'
              element={
                <PrivateRouter>
                  <EventsDescription />
                </PrivateRouter>
             } />
         <Route path='*' element={<NotFoundPage />} />
            <Route path='/fail' element={<FailPage />} />
          </Routes>  
              </div>      
        </BrowserRouter>        
  );
}
export default Router;