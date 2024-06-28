import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PublicRoute =({ children })=> {
    return !Cookies.get('accessToken') ? children : <Navigate to="/" />;
}

export default PublicRoute;
