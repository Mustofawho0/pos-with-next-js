"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useCreateProductPage = () => {
  const [products, setProduct] = useState(null);
  const onHandleCreateProduct = async (value) => {
    try {
      const res = await axios.post(`http://localhost:5000/products`, value);

      if (res.data.length === 0) throw new Error("Create Product Failed");
      toast.success("Create Product Success");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onHandleFetchProduct = async () => {
    try {
      const getProduct = await axios.get("http://localhost:5000/products");
      setProduct(getProduct.data);
      // toast.success("")
    } catch (error) {
      toast.error(error.message);
    }
  };
  return {
    onHandleCreateProduct,
    onHandleFetchProduct,
    products,
  };
};
