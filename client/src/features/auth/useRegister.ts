import { useMutation } from "@tanstack/react-query";
import { TRegisterFormData } from "./RegisterForm";
import * as authServices from "@/services/authServices";

export const useRegister = () =>
  useMutation({
    mutationFn: (formData: TRegisterFormData) =>
      authServices.register(formData),
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.error(error);
    },
  });
