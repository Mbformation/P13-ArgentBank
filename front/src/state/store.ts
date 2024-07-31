import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration de la persistance
const persistConfig = {
  key: "user", // clé pour nommer l'entrée dans le local storage
  storage, // on choisit le local storage comme méthode de stockage
  whitelist: ["token", "profile", "isSignedIn"], // la whitelist des états à persister
};

// Création d'un reducer persistant qui inclut la configuration de persistance et le reducer utilisateur
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// Configuration du store Redux
export const store = configureStore({
  reducer: {
    user: persistedUserReducer, // Ajout du reducer persistant au store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Création du persistor pour gérer la persistance du store
export const persistor = persistStore(store);

// Types pour l'état racine et le dispatch de l'application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
