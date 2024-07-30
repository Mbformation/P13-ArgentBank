import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // pour simplifier les requêtes

interface UserState {
  profile: Profile;
  isSignedIn: boolean;
  token: string;
}

export interface EditFormData {
  firstName: string;
  lastName: string;
}

export interface UserFormData {
  username: string;
  password: string;
}

interface LoginPayload {
  token: string;
  profile: Profile;
}

export interface Profile {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

//let
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.token = "";
        state.isSignedIn = false;
      })
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<LoginPayload>) => {
          // state représente l'état actuel auquel on applique une "action" (ici, on lui ajoute le token)
          // Le token est récupéré par la fonction loginAsync
          state.token = action.payload.token;
          state.profile = action.payload.profile;
          state.isSignedIn = true;
        }
      )
      .addCase(loginAsync.rejected, (state) => {
        state.token = "";
        state.isSignedIn = false;
      })
      .addCase(editAsync.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.profile = action.payload;
      });
  },
});

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (formData: UserFormData): Promise<LoginPayload> => {
    const tokenResponse = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: formData.username,
        password: formData.password,
      }
    );
    const profileResponse = await axios.post(
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

export const editAsync = createAsyncThunk(
  "user/editAsync",
  async (editData: EditFormData, api): Promise<Profile> => {
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

export default userSlice.reducer;
export const { logOut } = userSlice.actions;
