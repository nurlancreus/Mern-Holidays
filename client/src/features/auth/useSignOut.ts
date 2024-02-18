import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as authServices from "@/services/authServices";
import { useAppContext } from "@/context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authServices.signOut,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ type: "SUCCESS", message: "User successfully sign out!" });
      navigate("/sign-in");
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });
};
