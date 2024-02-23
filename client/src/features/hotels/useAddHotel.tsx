import { useMutation } from "@tanstack/react-query";
import * as hotelsServices from "@/services/hotelsServices";
import { useAppContext } from "@/context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const useAddHotel = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: FormData) => hotelsServices.addHotel(formData),
    onSuccess: async () => {
      showToast({ type: "SUCCESS", message: "Hotel successfully added!" });
      navigate("/");
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });
};
