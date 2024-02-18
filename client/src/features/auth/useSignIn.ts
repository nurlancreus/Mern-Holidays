import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as authServices from "@/services/authServices";
import { useAppContext } from "@/context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import { TSignInFormData } from "./SignInForm";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: TSignInFormData) => authServices.signIn(formData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ type: "SUCCESS", message: "User successfully sign in!" });
      navigate("/");
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });
};
