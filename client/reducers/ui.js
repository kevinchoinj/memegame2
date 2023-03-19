import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuDisplay: null,
  hoverOption: null,
};

export const uiReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    hoverMenuOption: (state, action) => {
      state.hoverOption = action.payload;
    },
    setMenuDisplay: (state, action) => {
      state.menuDisplay = action.payload;
    },
    setMenuDisplayAndResetHover: (state, action) => {
      state.menuDisplay = action.payload;
      state.hoverOption = "";
    },
  },
});

export const { hoverMenuOption, setMenuDisplay, setMenuDisplayAndResetHover } = uiReducer.actions;

export default uiReducer.reducer;
