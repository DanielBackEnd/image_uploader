import { apiSlice } from './apiSlice';
const UPLOAD_IMAGE_URL = '/api/upload';

export const imageApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    upload: builder.mutation({
      query: data => ({
        url: `${UPLOAD_IMAGE_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useUploadMutation } = imageApiSlice;
