import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Définition de l'interface FormData qui représente la structure des données du formulaire
export interface FormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

// Définition de l'état initial du formulaire
const initialState: FormData = {
  username: "",
  password: "",
  rememberMe: false,
};

// Création d'un slice Redux pour gérer l'état du formulaire
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // mettre à jour le nom d'utilisateur
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    // mettre à jour le mot de passe
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    //mettre à jour le remember me
    updateRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload;
    },
    // retourner au state initial
    resetFormData: () => initialState,
  },
});

// exporter les actions pour pouvoir les utiliser dans le composant
export const {
  updateUsername,
  updatePassword,
  updateRememberMe,
  resetFormData,
} = formSlice.actions;

// exporter le reducer pour être utilisé dans le store
export default formSlice.reducer;
