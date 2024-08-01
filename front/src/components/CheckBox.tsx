import { updateRememberMe } from "../state/form/formSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";

export default function CheckBox() {
    const dispatch = useDispatch<AppDispatch>();

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateRememberMe(event.target.checked));
    };

    return (
        <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input 
                type="checkbox" 
                name="rememberme" 
                id="remember-me" 
                onChange={handleCheckboxChange} 
            />
        </div>    
    );
}