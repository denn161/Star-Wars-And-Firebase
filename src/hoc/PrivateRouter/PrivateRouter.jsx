import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "@store/auth/selectors";

const PrivateRouter = ({ children }) => {
    
 const { auth } = useSelector(selectAuth)

 return auth?children:<Navigate to='/' replace/>
}


export default PrivateRouter;