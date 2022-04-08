import { createSlice } from "@reduxjs/toolkit";

// Reducer
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // action => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      bugs = bugs.filter((bug) => bug !== action.payload.id);
    },
  },
});

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;

export default slice.reducer;
