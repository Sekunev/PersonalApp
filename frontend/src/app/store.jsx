import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",

  // eklentiler arasında bulunan devtool'un geliştirme aşamasında ve sonrasında gözüküp gözükmeyeceğini true-false ile belirliyoruz.
});

export const persistor = persistStore(store);
export default store;
