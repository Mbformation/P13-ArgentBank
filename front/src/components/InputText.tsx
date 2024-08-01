import { updateUsername, updatePassword } from "../state/form/formSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";


export interface InputTextProps {
    name: string;
}

// Composant InputText
export default function InputText(props: InputTextProps) {
    const dispatch = useDispatch<AppDispatch>();
  
    const htmlAttvalue = props.name.toLowerCase();
  
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateUsername(e.target.value));
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updatePassword(e.target.value));
    };
  
    return (
      <>
        {props.name === "Username" && 
          <div className="input-wrapper">
            <label htmlFor={htmlAttvalue}>{props.name}</label>
            <input type="text" name={htmlAttvalue} id={htmlAttvalue} onChange={handleUsernameChange} />
          </div>
        }
        {props.name === "Password" && 
          <div className="input-wrapper">
            <label htmlFor={htmlAttvalue}>{props.name}</label>
            <input type="password" name={htmlAttvalue} id={htmlAttvalue} onChange={handlePasswordChange} />
          </div>
        }
      </>
    );
  }