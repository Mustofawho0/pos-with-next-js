import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useCreateAdminMutation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onHandleCreateAdmin = async (value, resetForm) => {
    try {
      setIsLoading(true);
      await axios.post("http://localhost:5000/admin", {
        value,
      });
      toast.success("Create Admin Success");
      resetForm()
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    onHandleCreateAdmin,
    isLoading
  }
};
