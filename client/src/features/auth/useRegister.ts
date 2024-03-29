import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TRegisterFormData } from "./RegisterForm";
import * as authServices from "@/services/authServices";
import { useAppContext } from "@/context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: TRegisterFormData) =>
      authServices.register(formData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ type: "SUCCESS", message: "User successfully register!" });
      navigate("/");
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });
};
