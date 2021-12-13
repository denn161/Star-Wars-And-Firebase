
import { Navigate } from 'react-router-dom';
import {useSelector } from 'react-redux';
import {selectAuth } from '@store/auth/selectors'
import PropTypes from 'prop-types';


const PublicRouter = ({ children }) => {
    
 const {auth} = useSelector(selectAuth)  

    return (
        <>
   {!auth ? ( children ) : <Navigate to='/home' replace />}      
        </>
    
    )
}

PublicRouter.propTypes = {
  children: PropTypes.object
}
export default PublicRouter;


//    if (!auth) {
//         return <Navigate to='/auth' replace/>
//     }
//     return children;