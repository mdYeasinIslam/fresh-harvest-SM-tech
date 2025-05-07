import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '@/types/product';

type QueryType = {
    success: boolean,
    message: string
    data:Product[]
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://code-commando.com/api/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query<QueryType, void>({
      query: () => 'products',
    }),
    getProductById: builder.query<QueryType, string>({
      query: (id:string) => `products/${id}`,
    }),
  }),
}); 

export const { useGetProductsQuery,useGetProductByIdQuery } = productApi;
