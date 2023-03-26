import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    lumber: 0,
    ore: 0,
    fish: 0,
    gold: 0,
    silver: 0,
  },
  incrementRates: {
    lumber: 1,
    ore: 1,
    fish: 1,
    gold: 1,
    silver: 1,
  }
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
