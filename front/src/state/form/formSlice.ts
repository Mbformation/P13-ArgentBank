import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const initialState: FormData = {
  username: "",
  password: "",
  rememberMe: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload;
    },
    resetFormData: () => initialState,
  },
});

export const {
  updateUsername,
  updatePassword,
  updateRememberMe,
  resetFormData,
} = formSlice.actions;
export default formSlice.reducer;
