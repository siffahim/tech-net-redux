import { api } from '@/redux/api/apiSlice';

//not exist it just write this for practice
const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCartProduct: builder.query({
      query: (id) => `/cart/${id}`,
    }),
  }),
});

export const { useGetCartProductQuery } = cartApi;
