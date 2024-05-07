import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toggleThemeReducer from "./features/themes/toggleThemeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({ theme: toggleThemeReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
// export const store = configureStore({
//   reducer: { theme: toggleThemeReducer },
// });

// export default store;
