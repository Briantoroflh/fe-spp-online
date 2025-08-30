import {getToken} from "../utils/Cookies.js";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const token = getToken();
    return token ? children : <Navigate to="/login"/>
}

export default PrivateRoute