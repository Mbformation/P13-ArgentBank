import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import LogOut from "./LogOut";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function NavBar() {
    const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
            </NavLink>
            <h1 className="sr-only">Argent Bank</h1>
            <div>
                {!isSignedIn && <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i> 
                    Sign In
                </NavLink> }
                {isSignedIn && <LogOut />}

                
            </div>
        </nav>
    );
}