import { updateRememberMe } from "../state/form/formSlice"; // importe la méthode d'actualisation de remember me
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";

//Composant pour le checkbox
export default function CheckBox() {
    const dispatch = useDispatch<AppDispatch>(); // on récupère la méthode dispatch

    // fonction d'actualisation du state remember me au clic sur le checkbox
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