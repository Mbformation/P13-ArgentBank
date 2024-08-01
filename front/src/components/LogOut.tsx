import { logOut } from "../state/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useNavigate } from "react-router-dom";

// Composant LogOut de la navbar lorsque l'utilisateur est connecté
export default function LogOut() {
    let firstName = useSelector((state: RootState) => state.user.profile.firstName);
    let capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1); // mettre la première lettre en majuscule
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    function logoutAndRedirect() {
        dispatch(logOut());
        navigate("/");
    }

    return (
        <>
            <button>
                <i className="fa fa-user-circle"></i> 
                {capitalizedFirstName} 
            </button>
            <button onClick={logoutAndRedirect} className="main-nav-item">
                <i className="fa fa-sign-out"></i>
                {/* fontawsome */}
                Sign Out
            </button>
        </>
    );
}