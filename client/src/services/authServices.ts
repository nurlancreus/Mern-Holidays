import { TRegisterFormData } from "@/features/auth/RegisterForm";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// user register
export const register = async (formData: TRegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  console.log(data);
  if (!data.ok) throw new Error(data.message);
};

// validate token
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) throw new Error("Token invalid");

  return response.json();
};
