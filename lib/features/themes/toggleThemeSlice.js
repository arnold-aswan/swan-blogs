import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: true,
};

export const toggleThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.light = !state.light;
    },
  },
});

export const { switchTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
