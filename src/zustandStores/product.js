"use client";

export const createProductSlice = (set) => ({
  products: null,
  createProduct: (payload) => {
    set({ products: payload });
  },
});
