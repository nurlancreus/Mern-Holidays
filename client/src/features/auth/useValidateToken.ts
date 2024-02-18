import { useQuery } from "@tanstack/react-query";
import * as authServices from "@/services/authServices";

export const useValidateToken = () => {
  return useQuery({
    queryKey: ["validateToken"],
    queryFn: authServices.validateToken,
    retry: false,
  });
};
