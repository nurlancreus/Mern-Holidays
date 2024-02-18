import { useMutation } from "@tanstack/react-query";
import { TRegisterFormData } from "./RegisterForm";
import * as authServices from "@/services/authServices";
import { useAppContext } from "@/context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: TRegisterFormData) =>
      authServices.register(formData),
    onSuccess: () => {
      showToast({ type: "SUCCESS", message: "Registration Success!" });
      navigate("/");
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });
};
