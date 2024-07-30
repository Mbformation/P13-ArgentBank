import { logOut } from "../state/user/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    function logoutAndRedirect() {
        dispatch(logOut());
        navigate("/");
    }

    return (
        <button onClick={logoutAndRedirect} className="main-nav-item">
            <i className="fa fa-user-circle"></i> 
            {/* fontawsome */}
            Sign Out
        </button>
    );
}