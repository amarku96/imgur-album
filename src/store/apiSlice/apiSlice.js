import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const imagesApi = createApi({
    reducerPath: "imagesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.imgur.com/3" ,   prepareHeaders: (headers) => {
        headers.set("Authorization", "Client-ID 426ca0c8e790c11")
          return headers
      }, }),
    endpoints: (builder) => ({
        
      getGallery: builder.query({
        query: (params) =>
     `/gallery/${params.section}/${params.sort}/${params.window}/${params.page}?showViral=${params.showViral}&mature=false&album_previews=false`,
      
      }),

  
    }),
  });
  
  export const { useGetGalleryQuery } = imagesApi;
  