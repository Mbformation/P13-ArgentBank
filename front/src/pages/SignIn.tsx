import Form from "../components/Form";
import Footer from "../components/Footer";
import { UserFormData, loginAsync } from "../state/user/userSlice";
import { resetFormData } from "../state/form/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {persistor} from "../state/store";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Composant SignIn de la page login
export default function SignIn(){

    const dispatch = useDispatch<AppDispatch>();
    const formData = useSelector((state: RootState) => state.form);

    function handleSubmit(e: React.SyntheticEvent) {
        const username = formData.username;
        const password = formData.password;
        const credentials: UserFormData = {
            username,
            password,
        } 
        e.preventDefault();
        checkRememberMe();
        dispatch(loginAsync(credentials));
        dispatch(resetFormData());
    }

    function checkRememberMe() {
        if (formData.rememberMe) {
            persistor.persist();
          } else {
            persistor.purge();
            persistor.pause();
          }
    }

    return (
        <>
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
                <button onClick={handleSubmit}>
                    <i className="fa fa-user-circle"></i> 
                    Sign In
                </button>
            </div>
        </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
            <Footer />
        </>
    )
}