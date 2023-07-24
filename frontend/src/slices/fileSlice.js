import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
  loading: false,
  uploaded: false,
};

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.value = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUploaded: (state, action) => {
      state.uploaded = action.payload;
    },
  },
});

export const { setFile, setLoading, setUploaded } = fileSlice.actions;

export default fileSlice.reducer;
