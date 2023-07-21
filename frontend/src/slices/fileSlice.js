import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFile } = fileSlice.actions;

export default fileSlice.reducer;
