"use client";
import { Provider } from "react-redux";
import store from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/lib/store";
import ThemeProviders from "@/components/ThemeProvider";

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProviders>{children}</ThemeProviders>
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
