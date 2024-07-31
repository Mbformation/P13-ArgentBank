import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useState } from "react";
import { editAsync, EditFormData } from "../state/user/userSlice";

export default function Hero() {
    const profile = useSelector((state: RootState) => state.user.profile);
    const dispatch = useDispatch<AppDispatch>();
    const [ firstName, setFirstName] = useState(profile.firstName)
    const [ lastName, setLastName] = useState(profile.lastName)
    const [ editMode, setEditMode] = useState(false)


    function cancel(){
        setEditMode(false);
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
    }

    function updateName() {
        const formData: EditFormData = {
            firstName: firstName,
            lastName: lastName
        }


        dispatch(editAsync(formData));
        setEditMode(false)
    }
    return (
        <div className="header">
            <h1>Welcome back<br />
                {!editMode && <>{profile.firstName} {profile.lastName} </>}
            </h1>
            {!editMode && <button className="edit-button" onClick={() => setEditMode(true)}>Edit Name</button>}
            {editMode && 
                <div className="edit-mode">
                    <div className="inputs">
                        <input type="text" id="first-name" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        <input type="text" id="last-name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    </div>
                    <div className="buttons">
                        <button className="validate-button" onClick={updateName}>Save</button> 
                        <button className="cancel-button" onClick={cancel}>Cancel</button>
                    </div>
                </div>}

        </div>

    );
}