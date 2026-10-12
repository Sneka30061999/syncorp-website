import { createSlice } from "@reduxjs/toolkit";

// Read saved preference from localStorage, fall back to "dark"
const saved = localStorage.getItem("theme");
const initialTheme = saved === "light" || saved === "dark" ? saved : "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: initialTheme },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
