import { useMutation } from "@tanstack/react-query";
import * as authServices from "@/services/authServices";
import { useAppContext } from "@/context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import { TSignInFormData } from "./SignInForm";

export const useSignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: TSignInFormData) => authServices.signIn(formData),
    onSuccess: () => {
      showToast({ type: "SUCCESS", message: "Sign in Success!" });
      navigate("/");
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });
};
