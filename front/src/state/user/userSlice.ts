import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // pour simplifier les requêtes

// Interface pour l'état utilisateur
interface UserState {
  profile: Profile;
  isSignedIn: boolean;
  token: string;
}

// Interface pour les données du formulaire d'édition du nom/prénon de l'utilisateur
export interface EditFormData {
  firstName: string;
  lastName: string;
}

// Interface pour les données du formulaire de connexion
export interface UserFormData {
  username: string;
  password: string;
}

// Interface pour les données d'authentification récupérées dans la requête de connexion
interface LoginPayload {
  token: string;
  profile: Profile;
}

// Interface pour le profil utilisateur
export interface Profile {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Définition de l'état initial de l'utilisateur
const initialState: UserState = {
  profile: {
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
    id: "",
  },
  isSignedIn: false,
  token: "",
};

// Création du slice utilisateur avec Redux Toolkit
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action pour déconnecter l'utilisateur
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        // Lorsque la requête de connexion est en attente
        state.token = "";
        state.isSignedIn = false;
      })
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<LoginPayload>) => {
          // Lorsque la requête de connexion est réussie
          state.token = action.payload.token;
          state.profile = action.payload.profile;
          state.isSignedIn = true;
        }
      )
      .addCase(loginAsync.rejected, (state) => {
        // Lorsque la requête de connexion échoue
        state.token = "";
        state.isSignedIn = false;
      })
      .addCase(editAsync.fulfilled, (state, action: PayloadAction<Profile>) => {
        // Lorsque la requête d'édition du profil est réussie
        state.profile = action.payload;
      });
  },
});

// Thunk pour la connexion utilisateur
export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (formData: UserFormData): Promise<LoginPayload> => {
    // Requête pour obtenir le token
    const tokenResponse = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: formData.username,
        password: formData.password,
      }
    );
    const profileResponse = await axios.post(
      // Requête pour obtenir le profil utilisateur
      "http://localhost:3001/api/v1/user/profile",
      {},
      { headers: { Authorization: `Bearer ${tokenResponse.data.body.token}` } }
    );
    return {
      token: tokenResponse.data.body.token,
      profile: profileResponse.data.body,
    };
  }
);

// Thunk pour l'édition du profil utilisateur
export const editAsync = createAsyncThunk(
  "user/editAsync",
  async (editData: EditFormData, api): Promise<Profile> => {
    // Requête pour mettre à jour le profil utilisateur
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        firstName: editData.firstName,
        lastName: editData.lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${
            ((api.getState() as any).user as UserState).token
          }`,
        },
      }
    );
    return response.data.body;
  }
);

// Exportation du reducer et des actions
export default userSlice.reducer;
export const { logOut } = userSlice.actions;
