import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    lumber: 0,
    ore: 0,
    fish: 0,
  },
};

export const resourcesReducer = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateResources: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateResources } = resourcesReducer.actions;

export default resourcesReducer.reducer;
