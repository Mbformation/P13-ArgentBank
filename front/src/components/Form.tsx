import InputText from "./InputText";
import CheckBox from "./CheckBox";
import { UserFormData, loginAsync } from "../state/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { Navigate } from "react-router-dom";
import {persistor} from "../state/store";





export default function Form() {
    const dispatch = useDispatch<AppDispatch>();
    const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
    
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
            rememberme: { checked: boolean };
        }
        const username = target.username.value;
        const password = target.password.value;
        const isRemembered = target.rememberme.checked;
    
        const formData: UserFormData = {
            username,
            password,
        } 
        checkRememberMe(isRemembered);
        dispatch(loginAsync(formData));
      }
    
    function checkRememberMe(isRememberMe: boolean) {
        if (isRememberMe) {
            persistor.persist();
          } else {
            persistor.purge();
            persistor.pause();
          }
    }
    return (
        <>
            { isSignedIn ? <Navigate to="/profile" replace={true} /> :
            <form method="post" onSubmit={handleSubmit}>
                <InputText name="Username" />
                <InputText name="Password" />
                <CheckBox />
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
            }
        </>
    );
}